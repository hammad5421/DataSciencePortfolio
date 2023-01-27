<script lang="ts">
  import BlogBody from '$lib/BlogBody.svelte';
  import BlogHeader from '$lib/BlogHeader.svelte';
  import BlogImage from '$lib/BlogImage.svelte';
  import BlogCodeBlock from '$lib/BlogCodeBlock.svelte';
  import BlogHeading1 from '$lib/BlogHeading1.svelte';
</script>

<svelte:head>
  <title>Loading CSVs into Postgres with Python | Austin's Blog</title>
  
  <meta name="description" content="Use Pandas to quickly create and populate a Postgres database" />
  <meta name="keywords" content="python, pandas, postgres, csv, data science" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Austin Poor" />

  <meta property="og:title" content="Quickly Load CSVs into PostgreSQL Using Python and Pandas" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://austinpoor.com/blog/2020-02-13-csv-to-postgres" />
  <meta property="og:image" content="https://austinpoor.com/propic-square.jpg" />
  <meta property="article:published_time" content="2020-02-13" />
  <meta property="article:author" content="Austin Poor" />
  <meta property="article:tag" content="python, pandas, postgres, csv, data science" />
</svelte:head>

<BlogBody>
  <BlogHeader 
    title="Quickly Load CSVs into PostgreSQL Using Python and Pandas"
    subtitle="Use Pandas to quickly create and populate a Postgres database"
    publicationDate="2020-02-13"
  />

  <BlogImage
    src="/csv-to-postgres.webp"
    alt="A flowchart from a CSV file icon to the Pandas library icon to a Postgres database icon"
    desc="Use Pandas to quickly load your CSV data into a Postgres database"
  />

  <p>
    Sometimes it can be kind of a pain to deal with copying CSV data into a Postgres database — 
    especially if you don't want to write out a long schema. Why not let Pandas do all that legwork 
    for you? I'll walk you through a quick example using the Iris dataset (here's a 
    <a class="underline" href="https://archive.ics.uci.edu/ml/datasets/Iris">link</a> to the data).
  </p>

  <BlogHeading1>
    Loading CSV Data Into Postgres with Pandas
  </BlogHeading1>

  <p>
    Assuming you have a Postgres server up and running, you'll need to either create a database to
    store your data or use an existing one. Using your preferred Postgres interface (i.e. 
    <a class="underline" href="https://www.postgresql.org/docs/9.3/app-psql.html">psql</a> or 
    <a class="underline" href="https://www.pgadmin.org">pgAdmin</a>), 
    you can run the following to create your database…
  </p>

  <BlogCodeBlock 
    content="CREATE DATABASE iris;"
    lang="sql"
  />

  <p>
    Now that you have a database to store your table, you can move over to Python to import your data. 
    You'll need the <code>SQLAlchemy</code> Python toolkit (if you don't already have it, it can be installed with 
    <code>pip install SQLAlchemy</code>).
  </p>

  <p>
    You're going to load your CSV data with Pandas and then use SQLAlchemy to pass the data to Postgres. 
    The <code>SQLAlchemy.create_engine</code> will need the following 6 pieces of information:
  </p>

  <ul class="list-disc list-inside">
    <li>The <span class="font-semibold">DBMS</span> — In this case, that will be <code>"postgres"</code></li>
    <li>A <span class="font-semibold">username</span> for the database</li>
    <li>That user's <span class="font-semibold">password</span></li>
    <li>The <span class="font-semibold">hostname</span> for the Postgres server</li>
    <li>The <span class="font-semibold">port</span> for the Postgres server (<code>5432</code> by default)</li>
    <li>The name of the <span class="font-semibold">database</span> to store the new table</li>
  </ul>
  
  <p>
    And it will be formatted as follows:
  </p>

  <BlogCodeBlock 
    content="{`create_engine("<dbms>://<username>:<password>@<hostname>:<port>/<db_name>")`}"
    lang="python"
  />

  <p>
    Here's how that will look in code...
  </p>

  <BlogCodeBlock
    lang="python"
    content="{
 `# Imports
import pandas as pd
from sqlalchemy import create_engine

# This CSV doesn't have a header so pass
# column names as an argument
columns = [
    "sepal_length",
    "sepal_width",
    "petal_length",
    "petal_width",
    "class"
]

# Load in the data
df = pd.read_csv(
    "iris.csv",
    names=columns
)

# Instantiate sqlachemy.create_engine object
engine = create_engine('postgresql://postgres:my_password@localhost:5432/iris')

# Save the data from dataframe to
# postgres table "iris_dataset"
df.to_sql(
    'iris_dataset', 
    engine,
    index=False # Not copying over the index
)`     
    }"
  />

  <p>
    If your CSV data is too large to fit into memory, you might be able to use 
    one of these two options…
  </p>

  <BlogHeading1>
    Working with Large Datasets: Option 1
  </BlogHeading1>

  <p>
    One option would be to use the Pandas <code>chunksize</code> argument for <code>pd.read_csv</code> 
    which will return a generator that will iterate through rows of the CSV and yield <code>DataFrames</code> 
    with the number of rows corresponding to the specified chunksize. Here's what that might look like…
  </p>

  <BlogCodeBlock 
    lang="python"
    content="{
`# Imports
import pandas as pd
from sqlalchemy import create_engine

# This CSV doesn't have a header so pass
# column names as an argument
columns = [
  "sepal_length",
  "sepal_width",
  "petal_length",
  "petal_width",
  "class"
]

# Instantiate sqlachemy.create_engine object
engine = create_engine('postgresql://postgres:my_password@localhost:5432/iris')

# Create an iterable that will read "chunksize=1000" rows
# at a time from the CSV file
for df in pd.read_csv("iris.csv",names=columns,chunksize=1000):
  df.to_sql(
    'iris_dataset', 
    engine,
    index=False,
    if_exists='append' # if the table already exists, append this data
  )`
    }"
  />

  <BlogHeading1>
    Working with Large Datasets: Option 2
  </BlogHeading1>

  <p>
    Another option (which is a bit more of a hack) would be to load a few rows of data into 
    pandas — enough for it to infer the column datatypes — and then read in the CSV using 
    <code>psql</code>. Here's what that might look like…
  </p>

  <BlogCodeBlock 
    lang="python"
    content="{
`# Imports
import pandas as pd
from sqlalchemy import create_engine

# This CSV doesn't have a header so pass
# column names as an argument
columns = [
    "sepal_length",
    "sepal_width",
    "petal_length",
    "petal_width",
    "class"
]

# Load in the data
df = pd.read_csv(
    "iris.csv",
    names=columns,
    nrows=1000    # load in the first 1000 rows
)

# Instantiate sqlachemy.create_engine object
engine = create_engine('postgresql://postgres:my_password@localhost:5432/iris')

# Save the data from dataframe to
# postgres table "iris_dataset"
df.to_sql(
    'iris_dataset', 
    engine,
    index=False
)`
    }" 
  />

  <p>
    Then, once Pandas has created the table you can run the following two lines in 
    <code>psql</code> in order to delete those few rows added by Pandas and let 
    Postgres re-import the full data...
  </p>

  <BlogCodeBlock 
    lang="sql"
    content="{
`DELETE FROM iris_dataset;

\\COPY iris_dataset FROM 'downloads/iris.csv' DELIMITER ',' CSV;`
    }"
  />

  <p>
    Hopefully that helps and let me know if you have any other suggested techniques!
  </p>

</BlogBody>