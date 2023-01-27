<script lang="ts">
  import BlogBody from '$lib/BlogBody.svelte';
  import BlogHeader from '$lib/BlogHeader.svelte';
  import BlogUnsplashImage from '$lib/BlogUnsplashImage.svelte';
  import BlogHeading1 from '$lib/BlogHeading1.svelte';
  import BlogHeading2 from '$lib/BlogHeading2.svelte';
</script>

<svelte:head>
  <title>Serving ML Models with gRPC | Austin's Blog</title>

  <meta name="description" content="Skip REST and give gRPC a try" />
  <meta name="keywords" content="api, grpc, rest, machine-learning, python" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Austin Poor" />
  
  <meta property="og:title" content="Serving ML Models with gRPC" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://austinpoor.com/blog/2021-12-01-serve-ml-with-grpc" />
  <meta property="og:image" content="https://austinpoor.com/propic-square.jpg" />
  <meta property="article:published_time" content="2021-12-01" />
  <meta property="article:author" content="Austin Poor" />
  <meta property="article:tag" content="api, grpc, rest, machine-learning, python" />
</svelte:head>

<BlogBody>
  <BlogHeader 
    title="Serving ML Models with gRPC"
    subtitle="Skip REST and give gRPC a try"
    publicationDate="2021-12-01"
  />  
  
  <BlogUnsplashImage 
    src="/grpc-ml-unsplash-cover.jpg"
    alt="An image of a computer screen displaying CSV data."
    author="Mika Baumeister"
    authorUsername="@mbaumi"
  />

  <p>
    Most people who are looking to put their newly trained ML model into production turn to REST¹ APIs. 
    Here's why I think you should consider using gRPC instead.
  </p>

  <BlogHeading1>Wait! What's wrong with REST!?</BlogHeading1>

  <p>
    Nothing! The main benefit of REST APIs is their ubiquity. Every major programming language has a way of making HTTP 
    clients and servers. And there are several existing frameworks for wrapping ML models with REST APIs (e.g. BentoML, 
    TF Serving, etc). But, if your use case doesn't fit one of those tools (and even if it does), you may find yourself 
    wanting to write something a little more custom. And the same thing that makes REST APIs versatile can also make 
    them difficult to work with.
  </p>

  <BlogHeading1>What is gRPC?</BlogHeading1>

  <p>
    As its <a class="underline" href="https://grpc.io">site states</a>, gRPC is “a high performance, open source universal 
    RPC framework,” originally developed at Google. The three main elements at the core of gRPC are: code generation, HTTP/2, 
    and Protocol Buffers².
  </p>

  <p>
    <a class="underline" href="https://developers.google.com/protocol-buffers">Protocol Buffers</a> are a binary, structured 
    data format designed by Google to be small and fast. Both gRPC services and their request/response message formats are 
    defined in <code>.protobuf</code> files.
  </p>

  <p>
    gRPC client and server code is generated from the <code>.protobuf</code> definition files, in your preferred language. 
    You then fill in the business logic to implement the API.
  </p>

  <p>
    <a class="underline" href="https://developers.google.com/web/fundamentals/performance/http2">HTTP/2</a>-based transport 
    provides gRPC with <a class="underline" href="https://grpc.io/blog/grpc-load-balancing/#why-grpc">several key benefits</a>:
  </p>

  <ul class="list-disc list-inside">
    <li>A binary protocol</li>
    <li>Bi-directional streaming</li>
    <li>Header compression</li>
    <li>Multiplexing several requests on the same connection</li>
  </ul>

  <p class="italic">
    Okay, but what does that mean for me?
  </p>

  <BlogHeading1>Why use gRPC?</BlogHeading1>

  <p>
    Let's compare gRPC with REST from a few perspectives.
  </p>

  <BlogHeading2>Type Safety & Documentation</BlogHeading2>

  <p>
    Since gRPC APIs are defined via protobufs, they are inherently documented and type-safe. Conversely, REST APIs have no such guarantee 
    you would need extra tooling like OpenAPI to define and document your service as well as a library to validate client requests.
  </p>
  
  <BlogHeading2>Speed, Binary Data & Streaming</BlogHeading2>
  
  <p>
    gRPC takes full advantage of HTTP/2 and Protocol Buffers to make your API as fast as possible. gRPC messages are made up of efficiently 
    packed binary data compared with REST's plain-text, JSON-encoded messages.
  </p>

  <p>
    <a class="underline" href="https://medium.com/@EmperorRXF/evaluating-performance-of-rest-vs-grpc-1b8bdf0b22da">One commonly cited test</a> 
    shows gRPC to be roughly 7-10 times faster than REST. While the differences may be less visible with smaller requests, the inputs to ML models 
    can often be large (e.g. large tables of data, images to be processed, or even video), where compression and binary formats shine.
  </p>

  <p>
    In fact, since Protocol Buffers allow for binary data, a request could be a large table of data encoded with 
    <a class="underline" href="https://arrow.apache.org">Apache Arrow</a> or <a class="underline" href="https://parquet.apache.org">Apache Parquet</a>. 
    And further, thanks to the capabilities of HTTP/2, large binary messages can broken up into chunks and streamed.
  </p>

  <BlogHeading1>Downsides & Alternatives</BlogHeading1>

  <p>
    gRPC certainly isn't perfect. For example, here are some issues you might run into:
  </p>

  <ul class="list-disc list-inside">
    <li>Slower initial development</li>
    <li>Less commonly used</li>
    <li>Messages aren't human-readable, which makes debugging more difficult</li>
    <li>Client libraries need to be generated</li>
  </ul>

  <p>
    Other approaches exist that might fit better with your workflow. <a class="underline" href="https://www.bentoml.ai">BentoML</a>, 
    <a class="underline" href="https://www.tensorflow.org/tfx/guide/serving">TF Serving</a>, and 
    <a class="underline" href="https://docs.ray.io/en/latest/serve/index.html">Ray Serve</a> are some great options for serving ML models. 
    Or, if you're looking for something a little more customizable, <a class="underline" href="https://fastapi.tiangolo.com">FastAPI</a> and 
    <a class="underline" href="https://flask.palletsprojects.com/en/2.0.x">Flask</a> are two great options that might be a better match.
  </p>

  <p>
    Also, for a partial approach, you could also consider swapping out your message format from JSON to 
    <a class="underline" href="https://bsonspec.org">BSON</a> or <a class="underline" href="https://msgpack.org/index.html">MessagePack</a>.
  </p>


  <BlogHeading1>Conclusion / TL;DR</BlogHeading1>

  <p>
    gRPC APIs are fast and easy to work with. They are inherently type-safe, they allow for bi-directional streaming messages (e.g. breaking large files into chunks), and they use a fast and efficient message format (Protocol Buffers).
  </p>

  <p>
    Next time you need to serve up an ML model via an API, consider using gRPC!
  </p>

  <BlogHeading1>Further Reading</BlogHeading1>

  <ul class="list-disc list-inside">
    <li>
      <a class="underline" href="https://grpc.io">gRPC</a> 
      (<a class="underline" href="https://grpc.io/docs/languages/python/quickstart">gRPC Python library</a>)
    </li>
    <li>
      <a class="underline" href="https://developers.google.com/protocol-buffers">
        Protocol Buffers
      </a>
    </li>
    <li>
      <a class="underline" href="https://developers.google.com/web/fundamentals/performance/http2">
        HTTP/2
      </a>
    </li>
  </ul>

  <BlogHeading1>Footnotes</BlogHeading1>

  <ol class="list-none list-inside">
    <li>
      [1] I know the term “RESTful” is maybe thrown around a bit too liberally — and applied to any HTTP-based API. In this article, 
      I use the colloquial definition of a REST API.
    </li>
    <li>
      [2] This is a bit of an oversimplification - gRPC is highly customizable. For example, you could use JSON instead of protobufs 
      and HTTP/1 instead of HTTP/2. But...should you?
    </li>
  </ol>

</BlogBody>