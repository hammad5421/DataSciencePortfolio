<script lang="ts">
  import BlogBody from '$lib/BlogBody.svelte';
  import BlogHeader from '$lib/BlogHeader.svelte';
  import BlogTitle from '$lib/BlogTitle.svelte';
  import BlogSubtitle from '$lib/BlogSubtitle.svelte';
  import BlogImage from '$lib/BlogImage.svelte';
  import BlogUnsplashImage from '$lib/BlogUnsplashImage.svelte';
  import BlogCodeBlock from '$lib/BlogCodeBlock.svelte';
  import BlogHeading1 from '$lib/BlogHeading1.svelte';
  import BlogHeading2 from '$lib/BlogHeading2.svelte';
  import BlogBlockQuote from '$lib/BlogBlockQuote.svelte';
</script>

<svelte:head>
  <title>Handling ML Predictions in a Flask App | Austin's Blog</title>

  <meta name="description" content="Don't let long-running code slow down your Flask app" />
  <meta name="keywords" content="data-science, python, flask, machine-learning, celery" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Austin Poor" />
  
  <meta property="og:title" content="Handling ML Predictions in a Flask App" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://austinpoor.com/blog/2021-02-18-flask-ml-predictions" />
  <meta property="og:image" content="https://austinpoor.com/propic-square.jpg" />
  <meta property="article:published_time" content="2021-02-18" />
  <meta property="article:author" content="Austin Poor" />
  <meta property="article:tag" content="data-science, python, flask, machine-learning, celery" />
</svelte:head>

<BlogBody>
  <BlogHeader 
    title="Handling ML Predictions in a Flask App"
    subtitle="Don't let long-running code slow down your Flask app"
    publicationDate="2021-02-18"
  />

  <BlogUnsplashImage 
    src="/ml-flask-unsplash-cover.jpg"
    alt="A drawing of a plot"
    author="HalGatewood.com"
    authorUsername="@halacious"
  />

  <p>
    One of the projects I worked on for the Metis data science bootcamp involved creating an MVP of a Flask app to display 
    movie recommendations to a user (think Netflix home screen).
  </p>

  <p>
    My recommendations involved a model prediction combined with a SQL query — and all of this was being done when a request came in, 
    before the response was sent. Come presentation day, loading the main page of the site took about 30 seconds.
  </p>

  <BlogCodeBlock
    lang="python"
    content="{
`@app.route("/")
def main_page():
  predictions = get_predictions()
  return render_template("index.html", predictions=predictions)`
    }"
  />

  <p>
    To be fair, this was an MVP I created on a short deadline in a <span class="italic">data science</span> bootcamp; not a 
    <span class="italic">web-dev</span> bootcamp. Still, 30 seconds of wait time is not so good.
  </p>

  <p>
    After graduating, once I had more time, I took a second look at my project to see what I could have improved.
  </p>

  <p>
    Here are two options I could have explored that would have drastically sped up my page loading time without having 
    to change my prediction algorithm.
  </p>

  <BlogHeading1>1) Load the Page, Then Make Predictions</BlogHeading1>

  <p>
    Instead of making predictions before returning to the main page (like in the code above), separate prediction code from 
    the page response code in the Flask app. Return the page without predictions. Then, once the page is loaded, call the API 
    using JavaScript. Here's what the updated Flask app code would look like:
  </p>

  <BlogCodeBlock
    lang="python"
    content="{
`@app.route("/")
def main_page():
  return render_template("index.html")

@app.route("/api/predict")
def api_predict():
  predictions = get_predictions()
  return jsonify(predictions)`
    }"
  />
  
  <p>
    And here's what the JavaScript code would look like:
  </p>

  <BlogCodeBlock
    lang="javascript"
    content="{
`fetch("/api/predict")
  .then(r => r.json())
  .then(predictions => {
    // Update the page with predicted
    // movie recommendations...
});`
    }"
  />

  <p>
    This is a small change to the initial code that can make a big difference to the user. The page can initially 
    load with placeholder images or a loading bar so your user can still interact with your site while they wait 
    for the predictions to load.
  </p>

  <BlogHeading1>2) Pass off the Work to Celery</BlogHeading1>

  <p>
    By running slow processes like ML predictions or complex SQL queries in a Flask response function, you're bogging down 
    your Flask server. This might not be a concern for you, depending on how much traffic you're expecting to get. Maybe this 
    is just a POC or only a few people will be using your service at a time. In that case, just using our API method should 
    be fine. Otherwise, you might want to think about a solution that can scale horizontally.
  </p>

  <p>
    Enter <a class="underline" href="https://docs.celeryproject.org/en/stable">Celery</a> — a python library for creating a 
    “distributed task queue.” With Celery, you can create a pool of workers to handle requests as they come in and it's as 
    easy as adding a decorator to a python function.
  </p>

  <p>
    With our new Celery workflow, we'll split the API route into two: one route for scheduling a prediction and another for
    getting the prediction results.
  </p>

  <p>
    Let's take a look at the updated Flask snippet:
  </p>

  <BlogCodeBlock
    lang="python"
    content="{
`from celery_predict import celery_app
from celery_predict import celery_predict

@app.route("/")
def main_page():
  return render_template("index.html")

@app.route("/api/predict",methods=["POST"])
def api_predict():
    # Get the request data from the post request
    print(request.json)
    data = request.json.get("input-data")
    # Run the task with Celery
    task = celery_predict.delay(data)
    # Return the task's id
    return {"status":"working","result-id":task.id}

@app.route("/api/get-result/<taskid>")
def get_result(taskid: str):
    # Get the celery task
    task = AsyncResult(taskid,app=celery_app)
    # If the task is done, return the result
    # otherwise return the status
    if task.state != "SUCCESS":
        return {"status":task.state}
    return {"status":task.state,"result":task.get()}`
    }"
  />

  <p>
    And here's the new Celery snippet:
  </p>

  <BlogCodeBlock
    lang="python"
    content="{
`from celery import Celery

celery_app = Celery(
    "predict",
    broker="redis://redis:6379/0",
    backend="redis://redis:6379/0"
)

@celery_app.task
def celery_predict(input_data: dict):
    # ML prediction code...
    preds = ...
    return preds`
    }"
  />
  
  <p>
    And the updated JavaScript:
  </p>

  <BlogCodeBlock
    lang="javascript"
    content="{
`function checkForResults(rid = "") {
  // Check if result is ready
  fetch(\`/api/get-result/\${rid}\`)
    .then(r => r.json())
    .then(r => {
      const stat = r.status;
      // Check if result is success, failure,
      // or not ready yet
      if (stat == "SUCCESS")
        handleSuccess(r);
      else if (stat == "FAILURE")
        handleError(r);
      else
        setTimeout(() => checkForResults(rid), 100); // Wait and try again
  });
}

function makePrediction() {
  // Prepare data to make a prediction
  const data = getInputData();
  // Schedule prediction & wait for result to be ready
  postData("/api/predict",{'input-data':data})
    .then(data => data['result-id'])
    .then(rid => checkForResults(rid));	
}`
    }"
  />

  <p>
    So now we start by loading the page then the JavaScript will schedule the model prediction, and continue to check 
    for results until they're ready.
  </p>

  <p>
    Admittedly, this has increased the complexity of our solution (you'll need to add a broker like Redis and start up a 
    separate Celery worker process) but it allows us to horizontally scale our app by adding as many Celery workers to 
    our pool as we need.
  </p>

  <p>
    For a complete example, check out this GitHub repo: 
    <a class="underline" href="https://github.com/a-poor/flask-celery-ml">a-poor/flask-celery-ml</a>.
  </p>

</BlogBody>