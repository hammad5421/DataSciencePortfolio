<script lang="ts">
  import BlogBody from '$lib/BlogBody.svelte';
  import BlogHeader from '$lib/BlogHeader.svelte';
  import BlogImage from '$lib/BlogImage.svelte';
  import BlogUnsplashImage from '$lib/BlogUnsplashImage.svelte';
  import BlogCodeBlock from '$lib/BlogCodeBlock.svelte';
  import BlogHeading1 from '$lib/BlogHeading1.svelte';
  import BlogHeading2 from '$lib/BlogHeading2.svelte';
  import BlogBlockQuote from '$lib/BlogBlockQuote.svelte';
</script>

<svelte:head>
  <title>Painless Data Augmentation with BigQuery | Austin's Blog</title>

  <meta name="description" content="Quickly Augmenting Your Datasets with BigQuery Public Data" />
  <meta name="keywords" content="data-science, gcp, big-query, sql, data" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Austin Poor" />
  
  <meta property="og:title" content="Painless Data Augmentation with BigQuery" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://austinpoor.com/blog/2021-01-07-big-query-data-augmentation" />
  <meta property="og:image" content="https://austinpoor.com/propic-square.jpg" />
  <meta property="article:published_time" content="2021-01-07" />
  <meta property="article:author" content="Austin Poor" />
  <meta property="article:tag" content="data-science, gcp, big-query, sql, data" />
</svelte:head>

<BlogBody>
  <BlogHeader 
    title="Painless Data Augmentation with BigQuery"
    subtitle="Quickly Augmenting Your Datasets with BigQuery Public Data"
    publicationDate="2021-01-07"
  />

  <BlogUnsplashImage 
    src="/bq-unsplash-dashboard.jpg"
    alt="An image of a data dashboard"
    author="Lukas Blazek"
    authorUsername="@goumbik"
  />

  <p>
    Google Cloud's BigQuery is a great tool for data scientists to quickly and easily augment their datasets with external data. 
    Specifically, BigQuery has a <a class="underline" href="https://cloud.google.com/bigquery/public-data">listing of public datasets</a> 
    from a variety of different sources. All you need is a Google Cloud account and some basic SQL knowledge.
  </p>

  <p>
    Here are just a few useful public datasets:
  </p>

  <ul class="list-disc list-inside">
    <li>
      <a class="underline" href="https://console.cloud.google.com/marketplace/product/united-states-census-bureau/acs">
        US Census American Community Survey
      </a>
    </li>
    <li>
      <a class="underline" href="https://console.cloud.google.com/marketplace/product/bigquery-public-datasets/covid19-public-data-program">
        COVID-19 Data from Google
      </a>
    </li>
    <li>
      <a class="underline" href="https://console.cloud.google.com/marketplace/product/noaa-public/gsod">
        NOAA Global Weather Data
      </a>
    </li>
    <li>
      <a class="underline" href="https://console.cloud.google.com/marketplace/product/the-metropolitan-museum-of-art/the-met-public-domain-art-works">
        Public Domain Artworks from The Met
      </a>
    </li>
    <li>
      <a class="underline" href="https://console.cloud.google.com/marketplace/product/cmorqs-public/cmorq-bcd-data">
        Bitcoin Transaction Data
      </a>
    </li>
  </ul>

  <BlogHeading1>A Quick Example</BlogHeading1>

  <p>
    I think one of the most useful among the BigQuery public datasets is the US Census ACS data, which gives multi-year data broken down 
    geographically (by state, zip code, county, etc.).
  </p>

  <p>
    It has a lot of great demographic information like population (broken down by age, race, gender, marital status, etc.), education levels, 
    employment, income, and much more.
  </p>

  <p>
    For example, say I wanted to query the total population and median household income for three zip codes in the NYC area. There's a table called 
    <code>zip_codes_2018_5yr</code> that gives a 5-year estimate of census data for the year 2018, broken down by zip code.
  </p>

  <p>
    Here's what my query will look like:
  </p>

  <BlogCodeBlock
    lang="sql"
    content="{
`SELECT 
  geo_id, -- Where geo_id is the zip code
  total_pop,
  median_income
FROM 
  \`bigquery-public-data\`.census_bureau_acs.zip_codes_2018_5yr
WHERE 
  geo_id in ("11377","11101","10708");`
    }"
  />

  <p>
    And I can run it in the BigQuery UI...
  </p>

  <BlogImage 
    src="/bq-screenshot-1.webp"
    alt="A screenshot of the query in the BigQuery UI"
    desc="Screenshot of the BigQuery UI"
  />

  <p>
    And get the following results...
  </p>

  <BlogImage 
    src="/bq-screenshot-2.webp"
    alt="A screenshot of the query's results in the BigQuery UI"
    desc="Viewing query results in the BigQuery UI"
  />

  <p>
    Great! I got my answer in 0.4 seconds and now I can go back and expand my query to get this data for multiple years. 
    Or, I can export the results to a CSV or JSON file to join it up with my data.
  </p>

  <BlogImage 
    src="/bq-screenshot-3.webp"
    alt="A screenshot query results export options in the BigQuery UI"
    desc="Screenshot showing export options for BigQuery results"
  />

  <p>
    Finally, as a bonus, you can connect to BigQuery through Python with the package 
    <a class="underline" href="https://googleapis.dev/python/bigquery/latest/index.html">google-cloud-bigquery</a>.
  </p>

  <BlogHeading1>Links / Further Reading</BlogHeading1>

  <ul class="list-disc list-inside">
    <li>
      <a class="underline" href="https://googleapis.dev/python/bigquery/latest/index.html">
        More About BigQuery
      </a>
    </li>
    <li>
      <a class="underline" href="https://cloud.google.com/bigquery/public-data">
        BigQuery's Public Datasets
      </a>
    </li>
    <li>
      <a class="underline" href="https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax">
        BigQuery SQL Syntax
      </a>
    </li>
    <li>
      <a class="underline" href="https://googleapis.dev/python/bigquery/latest/index.html">
        Querying BigQuery Tables from Python
      </a>
    </li>
  </ul>

</BlogBody>