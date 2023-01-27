<script lang="ts">
  import BlogBody from '$lib/BlogBody.svelte';
  import BlogHeader from '$lib/BlogHeader.svelte';
  import BlogImage from '$lib/BlogImage.svelte';
  import BlogHeading1 from '$lib/BlogHeading1.svelte';
</script>

<svelte:head>
  <title>Algorithmic Color Palettes | Austin's Blog</title>

  <meta name="description" content="Using Machine Learning to Generate Color Palettes from Images" />
  <meta name="keywords" content="data-science, machine-learning, clustering, colors, image-processing" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Austin Poor" />
  
  <meta property="og:title" content="Algorithmic Color Palettes" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://austinpoor.com/blog/2020-10-13-algorithmic-color-palettes" />
  <meta property="og:image" content="https://austinpoor.com/propic-square.jpg" />
  <meta property="article:published_time" content="2020-10-13" />
  <meta property="article:author" content="Austin Poor" />
  <meta property="article:tag" content="data-science, machine-learning, clustering, colors, image-processing" />
</svelte:head>

<BlogBody>
  <BlogHeader 
    title="Algorithmic Color Palettes"
    subtitle="Using Machine Learning to Generate Color Palettes from Images"
    publicationDate="2020-10-13"
  />
  
  <BlogImage 
    src="/color-palette-example.webp"
    alt="A photo of mountains with a color palette generated from the image"
  >
    Photo by Trey Ratcliff (<a class="underline" href="https://flickr.com/photos/stuckincustoms/8837173497">Source</a>) 
    with my generated color palette.
  </BlogImage>

  <p>
    I was recently working on a project in which I wanted to be able to compare the look and feel of images which
    led me to look for a way to create color palettes using machine learning.
  </p>

  <p>
    Generating a color palette can be thought of as a clustering problem in disguise. We want to partition all of 
    an image's pixels into <span class="italic">k</span> different groups that best represent the image.
  </p>

  <BlogImage 
    src="/rbg-color-space.webp"
    alt="A 3-dimensional representation of RGB color space where each axis represents a color channel (red, green, blue)"
  >
    (<a class="underline" href="https://en.wikipedia.org/wiki/File:RGB_Cube_Show_lowgamma_cutout_b.png">Source Wikipedia</a>)
  </BlogImage>

  <p>
    Instead of viewing our image as a grid of pixels — each with a red, green, and blue value — we can think of it as an array 
    of points plotted in <a class="underline" href="https://en.wikipedia.org/wiki/RGB_color_space">3D color-space</a>. There's a 
    dimension for red, a dimension for green, and a dimension for blue and a point can sit anywhere between <code>0</code> and 
    <code>255</code> in each dimension.
  </p>

  <p>
    Let's say we're looking to create a palette of 8 colors to represent each image. That means we want to find 8 clusters or 
    partitions that can give us the best possible representation of each image.
  </p>

  <p>
    There are many different clustering algorithms to choose from — each with their own pros and cons — but for the purposes of this
    project I tried both <a class="underline" href="https://en.wikipedia.org/wiki/K-means_clustering">K-Means clustering</a> and 
    <a class="underline" href="https://en.wikipedia.org/wiki/Hierarchical_clustering#Agglomerative_clustering_example">Agglomerative clustering</a>.
  </p>

  <p>
    I picked 5 sample stills from the film <a class="underline" href="https://en.wikipedia.org/wiki/Only_God_Forgives">Only God Forgives (2013)</a> 
    (using the site <a class="underline" href="http://film-grab.com/">FILMGRAB</a>) because of its rich palettes.
  </p>

  <BlogImage 
    src="/palette-only-god-forgives-k-means-1.webp"
    alt="A color palette generated from the film Only God Forgives using K-Means clustering"
  >
    Still from Only God Forgives (2013), courtesy of FILMGRAB, with k-means generated palette.
  </BlogImage>

  <p>
    Above is an example film still and the color palette generated using K-Means. As you can see, the algorithm does a fairly good job of making a 
    nice representative palette without much hyper-parameter tuning. Additionally, it allows you to specify a color palette size — which some other 
    clustering algorithms don't (DBSCAN, for example).
  </p>

  <p>
    You can see more examples of generated palettes in my 
    <a class="underline" href="https://nbviewer.jupyter.org/github/a-poor/color-palettes/blob/main/color-palettes.ipynb#">notebook</a>.
  </p>

  <BlogHeading1>Algorithmic Challenges</BlogHeading1>

  <p>
    As it turns out, algorithms like K-Means favor high-volume colors over sparse-but-prominent colors. For example, see the below still.
  </p>

  <BlogImage 
    src="/palette-only-god-forgives-k-means-2.webp"
    alt="A color palette generated from the film Only God Forgives using K-Means clustering"
  >
    Still from Only God Forgives (2013), courtesy of FILMGRAB, with k-means generated palette.
  </BlogImage>

  <p>
    The K-Means palette gets a good approximation of a majority of the colors, but looking at the image, you might expect it to include some 
    blue (such as on the mat or the shorts of the downed boxer) or red (such as on the ropes , or the standing boxer's gloves/attire/etc).
  </p>

  <p>
    Thinking back to how K-Means works, the algorithm tries to partition the colors in the image into <span class="italic">k</span> groups — 
    represented by <span class="italic">k</span> average points in color-space. In this case, there isn't enough blue or red in the image to be 
    picked up by the algorithm so they're getting washed out by the other similar, more abundant colors.
  </p>

  <p>
    In order to work around this, there are a few things we could try.
  </p>

  <BlogImage 
    src="/palette-only-god-forgives-k-means-vs-agglomerative.webp"
    alt="Color palettes generated from the film Only God Forgives using K-Means clustering and Agglomerative clustering"
  >
    Still from Only God Forgives (2013), courtesy of FILMGRAB, with k-means and agglomerative generated palettes.
  </BlogImage>

  <p>
    The above image shows palettes generated using both K-Means and Agglomerative clustering. Agglomerative clustering chose to include a blue in 
    the palette, though it lost the muted yellow and still didn't include any red.
  </p>

  <BlogImage 
    src="/palette-only-god-forgives-k-means-rgb-vs-hsv.webp"
    alt="Color palettes generated from the film Only God Forgives using K-Means clustering comparing RGB vs HSV image colors"
  >
    Still from Only God Forgives (2013), courtesy of FILMGRAB, with k-means generated palettes using RGB and HSV colors.
  </BlogImage>

  <p>
    Another approach is to convert the image's colors from <code>RGB</code> to <code>HSV</code>. <code>RGB</code> represents a color as a combination of 
    the intensities of the red, green, and blue channels while <code>HSV</code> represents a color as the hue (the spectrum of base colors), saturation 
    (the intensity of a color), and value (the relative lightness or darkness of a color) — which you can read more about 
    <a class="underline" href="https://en.wikipedia.org/wiki/HSL_and_HSV">here</a>. The above image shows palettes generated for the same image using 
    K-Means clustering with <code>RGB</code> colors and <code>HSV</code> colors. As you can see, the HSV approach includes both the blue and the yellow 
    (though still no red).
  </p>

  <p>
    In order to further improve the results, some options include combining techniques (i.e. Agglomerative clustering + HSV colors), hyper-parameter tuning, 
    using different algorithms (e.g. DBSCAN), and adjusting the color distance metric (If you're interested, you can read more about color differences 
    <a class="underline" href="https://en.wikipedia.org/wiki/Color_difference">here</a>).
  </p>

  <BlogHeading1>Flask App</BlogHeading1>

  <p>
    As a final bonus, I decided to create a simple proof-of-concept API for generating color palettes from images. The API takes an image URL as a parameter and will use K-Means to generate a palette.
  </p>

  <p>
    Additionally, I found that the website <a class="underline" href="https://coolors.co/">Coolors</a> makes it easy to create a color palette URL, so the API can return the color palette as a 2D array of colors or as a URL to a Coolors palette.
  </p>

  <p>
    For example, using this image…
  </p>

  <BlogImage 
    src="/palettes-only-god-forgives-no-palette.webp"
    alt="Still from Only God Forgives (2013)"
  >
    God Forgives (2013), courtesy of FILMGRAB.
  </BlogImage>

  <p>
    ...the API would produce the following link: <a class="underline" href="https://coolors.co/3c030b-050002-3967cd-152f63-760102-7e504c-110c33-b4d1df">
      https://coolors.co/3c030b-050002-3967cd-152f63-760102-7e504c-110c33-b4d1df</a>
  </p>

  <p>
    Viewed together, you would get...
  </p>

  <BlogImage 
    src="/palettes-only-god-forgives-with-generated-palette.webp"
    alt="Still from Only God Forgives (2013) with generated palette"
  >
    Still from Only God Forgives (2013), courtesy of FILMGRAB, with k-means generated palette courtesy of Coolors.
  </BlogImage>

  <p>
    You can check out the Flask app in my GitHub repo, <a class="underline" href="https://github.com/a-poor/color-palettes">here</a>.
  </p>

  <BlogHeading1>Conclusion</BlogHeading1>

  <p>
    This was a short but fun side-project and there's definitely a lot more to explore here. Definitely check out 
    <a class="underline" href="https://film-grab.com/">FILMGRAB</a> and <a class="underline" href="https://coolors.co/">Coolors</a> 
    if you think you might be interested.
  </p>

  <p>
    You can find my code on <a class="underline" href="https://github.com/a-poor/color-palettes">GitHub</a> or check out the notebook with 
    <a class="underline" href="https://nbviewer.jupyter.org/github/a-poor/color-palettes/blob/main/color-palettes.ipynb#">nbviewer</a> or 
    <a class="underline" href="https://mybinder.org/v2/gh/a-poor/color-palettes/main?filepath=color-palettes.ipynb">Binder</a>.
  </p>

</BlogBody>