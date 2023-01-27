<script lang="ts">
  import BlogBody from '$lib/BlogBody.svelte';
  import BlogHeader from '$lib/BlogHeader.svelte';
  import BlogImage from '$lib/BlogImage.svelte';
  import BlogUnsplashImage from '$lib/BlogUnsplashImage.svelte';
  import BlogCodeBlock from '$lib/BlogCodeBlock.svelte';
  import BlogHeading1 from '$lib/BlogHeading1.svelte';
</script>

<svelte:head>
  <title>Plotting with Jinja | Austin's Blog</title>

  <meta name="description" content="Create fully custom plots in Python with SVG and Jinja" />
  <meta name="keywords" content="python, jinja, data-viz, data-science, svg" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Austin Poor" />
  
  <meta property="og:title" content="Take Full Control of Your Python Plots with Jinja" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://austinpoor.com/blog/2020-07-02-plot-with-jinja" />
  <meta property="og:image" content="https://austinpoor.com/propic-square.jpg" />
  <meta property="article:published_time" content="2020-07-02" />
  <meta property="article:author" content="Austin Poor" />
  <meta property="article:tag" content="python, jinja, data-viz, data-science, svg" />
</svelte:head>

<BlogBody>
  <BlogHeader 
    title="Take Full Control of Your Python Plots with Jinja"
    subtitle="Create fully custom plots in Python with SVG and Jinja"
    publicationDate="2020-07-02"
  />

  <BlogUnsplashImage 
    src="/jinja-unsplash-draw-plot.jpg"
    alt="A drawing of a plot"
    author="Isaac Smith"
    authorUsername="@isaacmsmith"
  />

  <p>
    Have you ever spent way too long digging through documentation, trying to get your plots to look the way you want? 
    Next time it happens, consider ditching matplotlib or seaborn and using <code>Jinja</code> to create a custom plot.
  </p>

  <p>
    Jinja is a Python templating language, based on Django templates, which you may be familiar with from other packages 
    like Flask or Airflow. It has a ton of useful features but you only need some basics to get started.
  </p>

  <p>
    You can use Jinja to make your visual as an SVG (with a workflow that's pretty similar to D3's) and display them, 
    all while staying in Jupyter.
  </p>

  <BlogHeading1>Some Basic SVG</BlogHeading1>

  <p>
    Before we get into the big stuff, let me cover some basics. SVG stands for <span class="italic">Scalable Vector Graphics</span>, 
    meaning all the image data is stored as points in vector space and therefore can be resized without getting pixelated 
    (unlike <span class="italic">raster</span> images).
  </p>

  <p>
    SVGs are XML-based and have many different tags, representing different paths and shapes. Some key tags are:
  </p>

  <ul class="list-disc list-inside">
    <li>
      <code>circle</code>: Draws a circle using <span class="italic">xy</span> coordinates and a radius
    </li>
    <li>
      <code>rect</code>: Draws a rectangle using <span class="italic">xy</span> coordinates for upper-left corner plus 
      <span class="italic">width</span> and <span class="italic">height</span>
    </li>
    <li>
      <code>polyline</code>: Draws a path of connected <span class="italic">xy</span> points
    </li>
    <li>
      <code>text</code>: Draws text
    </li>
  </ul>

  <p>
    Each SVG element has its own attributes that can be changed but most elements share common attributes to control the 
    <span class="italic">fill</span> and <span class="italic">stroke</span>.
  </p>

  <p>
    One other key thing to keep in mind when creating SVGs is that the <span class="italic">xy</span> coordinates start at 
    <span class="italic">(0,0)</span> in the <span class="italic">upper-left corner</span> and increase as they move towards 
    the <span class="italic">bottom-right corner</span>.
  </p>

  <p>
    For more information on working with SVGs check out Mozilla's reference material 
    <a class="underline" href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction">here</a>.
  </p>

  <p>
    Now on to Jinja…
  </p>

  <BlogHeading1>A (Mini) Intro to Jinja Templates</BlogHeading1>

  <p>
    Jinja's templates have great features like loops, conditionals, and template inheritance, and that's just scratching 
    the surface; there is a ton of functionality.
  </p>

  <p>
    Here's a basic example of a Jinja template:
  </p>

  <BlogCodeBlock 
    lang="jinja-text-template"
    content="{
`{% for name in names %}
  Hello, {{ name }}, welcome to {{ place }}!
{% endfor %}`
    }"
  />

  <p>
    And if you were to render the template with the following...
  </p>

  <BlogCodeBlock 
    lang="python"
    content="{
`names = ["tim", "sue", "tom", "sally"]
place = "my party"`
    }"
  />

  <p>
    ...you would get the following output...
  </p>

  <BlogCodeBlock 
    lang="text"
    content="{
`Hello, tim, welcome to my party!
Hello, sue, welcome to my party!
Hello, tom, welcome to my party!
Hello, sally, welcome to my party!`
    }"
  />

  <p>
    For more information on Jinja templates, check out the <a class="underline" href="https://jinja.palletsprojects.com/en/2.11.x/templates/">docs</a>.
  </p>

  <p>    
    Now, let's move on to building a plot with Jinja.
  </p>

  <BlogHeading1>Plotting with Jinja</BlogHeading1>

  <p>
    Let's make a simple demo scatter plot with some example data, using Jinja.
  </p>
  
  <p>
    For starters, here's the data and some basic layout info I'll use in my template:
  </p>

  <BlogCodeBlock
    lang="python"
    content="{
`data = {
    "title":"Time-Price Comparison",
    "subtitle":"Scatter plot of time vs price.",
    "data":[
        {"time":2,"price":1,"callout":False},
        {"time":3,"price":2,"callout":False},
        {"time":4,"price":3,"callout":True},
        {"time":5,"price":4,"callout":True},
        {"time":6,"price":5,"callout":False}
    ],
    "xlabel":"Time (PM)",
    "ylabel":"Price",
    "caption":"Note: Data made up from my imagination and therefore not real. [2020]"
}
layout = {
    "data": {
        "time_min":1,
        "time_max":7,
        "price_min":0,
        "price_max":6
    },
    "plot": {
        "xmin":  80,
        "ymin": 110,
        "xmax": 565,
        "ymax": 300,
        "pad":  10,
        "point_radius": 5
    },
    "color": {
        "color_on": "hsl(230,70%,60%)",
        "color_off": "hsl(0,0%,50%)",
        "axis": "hsl(0,0%,30%)",
        "title": "hsl(0,0%,0%)",
        "subtitle": "hsl(0,0%,50%)",
        "caption": "hsl(0,0%,50%)",
        "background": "hsl(0,0%,95%)"
    }
}`
    }"
  />

  <p>
    Now let's make the template, which will be a mix of SVG's XML-style tags and special Jinja commands:
  </p>

  <BlogCodeBlock 
    lang="jinja-svg-template"
    content="{
`<svg
    xmlns="http://www.w3.org/2000/svg" 
    xml:lang="en" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 600 400" 
    width="600">
    <!-- Set the background color -->
    <rect 
        id="background" 
        x="0" 
        y="0" 
        width="600" 
        height="400" 
        fill="{{ layout.color.background }}" 
        />

    <!-- Create the Scatterplot -->
    <g id="plot-layer">
    {%- for p in data.data %}
      <circle 
          cx="{{ xscale(p.time) }}" 
          cy="{{ yscale(p.price) }}" 
          r="{{ layout.plot.point_radius }}"
          {% if p.callout -%}
              fill="{{ layout.color.color_on }}"
          {% else -%}
              fill="{{ layout.color.color_off }}"
          {% endif -%}
          />     
    {%- endfor %}
    </g>
    
    <!-- Draw the Axis, Ticks, & Labels -->
    <g id="axis-layer">
      <!-- Draw the axis -->
      <polyline 
        points="
            {{ layout.plot.xmin }} {{ layout.plot.ymin }} 
            {{ layout.plot.xmin }} {{ layout.plot.ymax }} 
            {{ layout.plot.xmax }} {{ layout.plot.ymax }}" 
        stroke="{{ layout.color.axis }}" 
        stroke-linecap="round" 
        fill="transparent" 
        />
        
      <!-- Draw the yaxis label (rotated) -->
      <g transform="translate(0,20)">
            <text 
              x="30" 
              y="176.5" 
              fill="{{ layout.color.axis }}" 
              font-family="helvetica" 
              text-align="center" 
              transform="rotate(-90,30,176.5)"
              >
              {{ data.ylabel }}
          </text>
       </g>
      
      <!-- Draw the yticks -->
      <g id="yticks">
      {% for t in yticks %}
          <line 
              x1="{{ layout.plot.xmin }}" 
              y1="{{ t.pos }}" 
              x2="{{ layout.plot.xmin - layout.plot.pad }}" 
              y2="{{ t.pos }}" 
              stroke="{{ layout.color.axis }}" 
              stroke-linecap="round"
              />
          <text 
              x="{{ layout.plot.xmin }}" 
              y="{{ t.pos }}" 
              fill="{{ layout.color.axis }}"
              font-family="helvetica"
              text-anchor="end"
              dx="-15"
              dy="5"
              font-weight="lighter"
              >
              {{ t.text }}
          </text>
      {%- endfor %}
      </g>
      
      <!-- Draw the x axis label -->
      <text 
          x="322.5" 
          y="350" 
          fill="{{ layout.color.axis }}" 
          font-family="helvetica" 
          text-anchor="middle"
          >
          {{ data.xlabel }}
      </text>
      
      <!-- Draw the xticks -->
      <g id="xticks">
      {%- for t in xticks -%}
          <line 
              x1="{{ t.pos }}" 
              y1="{{ layout.plot.ymax }}" 
              x2="{{ t.pos }}" 
              y2="{{ layout.plot.ymax + layout.plot.pad }}" 
              stroke="{{ layout.color.axis }}" 
              stroke-linecap="round"
              />
          <text 
              x="{{ t.pos }}" 
              y="{{ layout.plot.ymax }}" 
              fill="{{ layout.color.axis }}"
              font-family="helvetica"
              text-anchor="middle"
              dx="0"
              dy="25"
              font-weight="lighter"
              >
              {{ t.text }}
          </text>
      {% endfor -%}
      </g>
    </g>
    
    <!-- Add the title, subtitle, & description -->
    <g id="text-layer">
      <text 
          x="15" 
          y="40" 
          style="font-family: helvetica; font-size: 28px; font-weight: normal;" 
          fill="{{ layout.color.title }}"
          >
          {{ data.title }}
      </text>
      <text 
          x="15" 
          y="70" 
          style="font-family: helvetica; font-size: 18px; font-weight: normal;" 
          fill="{{ layout.color.subtitle }}">
          {{ data.subtitle }}
      </text>
      <text 
          x="15" 
          y="385" 
          style="font-family: helvetica; font-size: 10px; font-weight: normal;" 
          fill="{{ layout.color.caption }}">
          {{ data.caption }}
      </text>
   </g>
</svg>`
    }"
  />

  <p>
    Let's assume our template is stored as a string in the variable <code>plot_template</code>.
  </p>

  <p>
    Now we can render the template, using our <span class="italic">plot</span> and <span class="italic">layout</span> data, 
    with the following code:
  </p>

  <BlogCodeBlock 
    lang="python"
    content="{
`import jinja2

# Use the string to create a jinja template
jinja_template = jinja2.Template(
    plot_template
)

# Render it by passing the data
# to the template
svg_string = jinja_template.render(
    data=data,
    layout=layout,
    xticks=xticks,
    yticks=yticks,
    xscale=xscale,
    yscale=yscale
)

# The result is just a string
# with the rendered plot
type(svg_string) == str


# Now, optionally, if you want
# to display the SVG in Jupyter
# you can do this...

from IPython.display import display_svg

display_svg(
  svg_string,
  raw=True
)`
    }"
  />

  <p>
    Here's what the rendered plot would look like as an SVG:
  </p>

  <BlogImage 
    src="/jinja-sample-plot.svg"
    alt="Sample plot rendered with jinja (as an SVG)"
    desc="Sample plot rendered with jinja (as an SVG)"
  />

  <p>
    And here's what it would look like as a raster image:
  </p>

  <BlogImage 
    src="/jinja-sample-plot.webp"
    alt="Sample plot rendered with jinja (as a raster of the SVG)"
    desc="Sample plot rendered with jinja (as a raster of the SVG)"
  />

  <p>
    For the complete code, check out the gist <a class="underline" href="https://gist.github.com/a-poor/173f0d190634065bfd7ad73eb882e637">here</a>.
  </p>

  <BlogHeading1>Conclusion</BlogHeading1>

  <p>
    If you're just doing EDA calling <code>plt.scatter(x,y)</code> is still the way to go, but if you want to 
    be able to fully customize your plot try using Jinja. It might take more time to start up but your templates 
    are easily reusable and you aren't limited to the plots that are supported by your plotting library.
  </p>

  <p>
    Another great benefit of SVGs is the ability to copy the path from another SVG and incorporate it into your own. 
    For example, if you wanted to change the points in your scatter plot to be your company's logo and your competitors, 
    all you need to do is download the SVG logos and replace the circles in your template with the logo paths.
  </p>
  
</BlogBody>
