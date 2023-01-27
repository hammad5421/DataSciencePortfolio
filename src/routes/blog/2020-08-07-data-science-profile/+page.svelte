<script lang="ts">
  import BlogBody from '$lib/BlogBody.svelte';
  import BlogHeader from '$lib/BlogHeader.svelte';
  import BlogUnsplashImage from '$lib/BlogUnsplashImage.svelte';
  import BlogCodeBlock from '$lib/BlogCodeBlock.svelte';
  import BlogHeading1 from '$lib/BlogHeading1.svelte';
</script>

<svelte:head>
  <title>Data Scientists, Start Using Profilers | Austin's Blog</title>

  <meta name="description" content="Create fully custom plots in Python with SVG and Jinja" />
  <meta name="keywords" content="data-science, machine-learning, python, profiling, algorithms" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Austin Poor" />
  
  <meta property="og:title" content="Data Scientists, Start Using Profilers" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://austinpoor.com/blog/2020-08-07-data-science-profile" />
  <meta property="og:image" content="https://austinpoor.com/propic-square.jpg" />
  <meta property="article:published_time" content="2020-08-07" />
  <meta property="article:author" content="Austin Poor" />
  <meta property="article:tag" content="data-science, machine-learning, python, profiling, algorithms" />
</svelte:head>

<BlogBody>
  <BlogHeader 
    title="Data Scientists, Start Using Profilers"
    subtitle="Find the parts of your algorithm that are ACTUALLY slowing you down"
    publicationDate="2020-08-07"
  />

  <BlogUnsplashImage 
    src="/profilers-unsplash-cover.jpg"
    alt="A drawing of a plot"
    author="Isaac Smith"
    authorUsername="@isaacmsmith"
  />

  <p>
    Data scientists often need to write a lot of complex, slow, CPU- and I/O-heavy code — whether you're working with large matrices, 
    millions of rows of data, reading in data files, or web-scraping.
  </p>

  <p>
    Wouldn't you hate to waste your time refactoring one section of your code, trying to wring out every last ounce of performance, 
    when a few simple changes to another section could speed up your code tenfold?
  </p>

  <p>
    If you're looking for a way to speed up your code, a profiler can show you exactly which parts are taking the most time, allowing 
    you to see which sections would benefit most from optimization.
  </p>

  <p>
    A profiler measures the time or space complexity of a program. There's certainly value in theorizing about the big O complexity of 
    an algorithm but it can be equally valuable to examine the real complexity of an algorithm.
  </p>

  <p class="italic">
    Where is the biggest slowdown in your code? Is your code 
    <a class="underline" href="https://stackoverflow.com/questions/868568/what-do-the-terms-cpu-bound-and-i-o-bound-mean">I/O bound or CPU bound</a>? 
    Which specific lines are causing the slowdowns?
  </p>
  
  <p>
    Once you've answered those questions you'll A) have a better understanding of your code and B) know where to target your optimization 
    efforts in order to get the biggest boon with the least effort.
  </p>

  <p>
    Let's dive into some quick examples using Python.
  </p>

  <BlogHeading1>The Basics</BlogHeading1>

  <p>
    You might already be familiar with a few methods of timing your code. You could check the time before and after a line executes like this:
  </p>

  <BlogCodeBlock 
    lang="ipython"
    content="{
`In [1]: start_time = time.time()
   ...: a_function() # Function you want to measure
   ...: end_time = time.time()
   ...: time_to_complete = end_time - start_time
   ...: time_to_complete
Out[1]: 1.0110783576965332`
    }"
  />

  <p>
    Or, if you're in a Jupyter Notebook, you could use the magic <code>%time</code> command to time the execution of a statement, like this:
  </p>

  <BlogCodeBlock 
    lang="ipython"
    content="{
`In [2]: %time a_function()
CPU times: user 14.2 ms, sys: 41 µs, total: 14.2 ms
Wall time: 1.01 s`  
    }"
  />

  <p>
    Or, you could use the other magic command <code>%timeit</code> which gets a more accurate measurement by running the command 
    multiple times, like this:
  </p>

  <BlogCodeBlock 
    lang="ipython"
    content="{
`In [3]: %timeit a_function()
1.01 s ± 1.45 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)`
    }"
  />

  <p>
    Alternatively, if you want to time your whole script, you can use the bash command <code>time</code>, like so…
  </p>

  <BlogCodeBlock 
    lang="bash"
    content="{
`$ time python my_script.py

real    0m1.041s
user    0m0.040s
sys     0m0.000s`
    }"
  />

  <p>
    These techniques are great if you want to get a quick sense of how long a script or a section of code takes to run but 
    they are less useful when you want a more comprehensive picture. It would be a nightmare if you had to wrap each line in 
    <code>time.time()</code> checks. In the next section, we'll look at how to use Python's built-in profiler.
  </p>

  <BlogHeading1>Diving Deeper with cProfile</BlogHeading1>

  <p>
    When you're trying to get a better understanding of how your code is running, the first place to start is 
    <a class="underline" href="https://docs.python.org/3/library/profile.html#module-cProfile">cProfile</a>, Python's built-in profiler. 
    cProfile will keep track of how often and for how long parts of your program were executed.
  </p>

  <p>
    Just keep in mind that cProfile shouldn't be used to benchmark your code. It's written in C which makes it fast but it still introduces 
    some overhead that could throw off your times.
  </p>
  
  <p>
    There are multiple ways to use cProfile but one simple way is from the command line.
  </p>

  <p>
    Before we demo cProfile, let's start by looking at a basic sample program that will download some text files, count the words in each one, 
    and then save the top 10 words from each to a file. Now that being said, it isn't too important what the code does, just that we'll be using 
    it to show how the profiler works.
  </p>

  <BlogCodeBlock 
    lang="python"
    content="{
`import re
from collections import Counter
import urllib.request

def get_book(url):
  """Load text from a URL"""
  with urllib.request.urlopen(url) as response:
    text = response.read().decode(errors='ignore')
  return text.lower()
  
def split_words(book):
  """Extract the words with regex"""
  return re.split("[^A-Za-z]+",book)
  
def count_words(words):
  """Create a dictionary with word counts"""
  return Counter(words)
  
def read_books(urls):
  """For each url in urls, 
  load the book and count the words"""
  # Create a place to store word counts
  word_counts = {}
  # For each book: load it, count words, store the counts
  for title, path in urls.items():
    book = get_book(path)
    words = split_words(book)
    counts = count_words(words)
    word_counts[title] = counts.most_common()[:10]
  return word_counts
  
def save_results(results,path):
  """Save the results to a text file"""
  with open(path,'w') as f:
    for book, words in results.items():
      f.write(f"BOOK: {book}\n")
      for word, count in words:
        f.write(f"{' '*8}{word:10s}{count:6d}\n")
    
urls = {
  'pride-and-prejudice': 'https://www.gutenberg.org/files/1342/1342-0.txt',
  'alice-in-wonderland': 'https://www.gutenberg.org/files/11/11-0.txt',
  'sherlock-holmes': 'https://www.gutenberg.org/files/1661/1661-0.txt',
  'moby-dick': 'https://www.gutenberg.org/files/2701/2701-0.txt',
  'count-of-monte-cristo': 'https://www.gutenberg.org/files/1184/1184-0.txt'
}


output_file = "my-results.txt"

# Download the books and count words
results = read_books(urls)

# Save the results to a text file
save_results(results,output_file)`
    }"
  />

  <p>
    Now, with the following command, we'll profile our script.
  </p>

  <BlogCodeBlock 
    lang="bash"
    content="{
`$ python -m cProfile -o profile.stat script.py`
    }"
  />

  <p>
    The <code>-o</code> flag specifies an output file for cProfile to save the profiling statistics.
  </p>

  <p>
    Next, we can fire up python to examine the results using the 
    <a class="underline" href="https://docs.python.org/3/library/profile.html#module-pstats">pstats</a> 
    module (also part of the standard library).
  </p>

  <BlogCodeBlock 
    lang="ipython"
    content="{
`In [1]: import pstats
   ...: p = pstats.Stats("profile.stat")
   ...: p.sort_stats(
   ...:   "cumulative"   # sort by cumulative time spent
   ...: ).print_stats(
   ...:   "script.py"    # only show fn calls in script.py
   ...: )Fri Aug 07 08:12:06 2020    profile.stat46338 function calls (45576 primitive calls) in 6.548 secondsOrdered by: cumulative time
List reduced from 793 to 6 due to restriction <'script.py'>ncalls tottime percall cumtime percall filename:lineno(function)
     1   0.008   0.008   5.521   5.521 script.py:1(<module>)
     1   0.012   0.012   5.468   5.468 script.py:19(read_books)
     5   0.000   0.000   4.848   0.970 script.py:5(get_book)
     5   0.000   0.000   0.460   0.092 script.py:11(split_words)
     5   0.000   0.000   0.112   0.022 script.py:15(count_words)
     1   0.000   0.000   0.000   0.000 script.py:32(save_results)`
    }"
  />

  <p>
    Wow! Look at all that useful info!
  </p>

  <p>
    For each function called, we're seeing the following information:
  </p>

  <ul class="list-disc list-inside">
    <li><code>ncalls</code>: number of times the function was called</li>
    <li><code>tottime</code>: total time spent in the given function (excluding calls to sub-functions)</li>
    <li><code>percall</code>: <code>tottime</code> divided by <code>ncalls</code></li>
    <li><code>cumtime</code>: total time spent in this function and all sub-functions</li>
    <li><code>percall</code>: (again) <code>cumtime</code> divided by <code>ncalls</code></li>
    <li><code>filename:lineo(function)</code>: the file name, line number, and function name</li>
  </ul>

  <p>
    When reading this output, note the fact that we're hiding a lot of data —in fact, we're only seeing 6 out of 793 rows. 
    Those hidden rows are all the sub-functions being called from within functions like <code>urllib.request.urlopen</code> or 
    <code>re.split</code>. Also, note that the <code>&lt;module&gt;</code> row corresponds to the code in <code>script.py</code> 
    that isn't inside a function.
  </p>

  <p>
    Now let's look back at the results, sorted by cumulative duration.
  </p>

  <BlogCodeBlock
    lang="text"
    content="{
`ncalls tottime percall cumtime percall filename:lineno(function)
     1   0.008   0.008   5.521   5.521 script.py:1(<module>)
     1   0.012   0.012   5.468   5.468 script.py:19(read_books)
     5   0.000   0.000   4.848   0.970 script.py:5(get_book)
     5   0.000   0.000   0.460   0.092 script.py:11(split_words)
     5   0.000   0.000   0.112   0.022 script.py:15(count_words)
     1   0.000   0.000   0.000   0.000 script.py:32(save_results)`
    }"
  />

  <p>
    Keep in mind the hierarchy of function calls. The top-level, <code>&lt;module&gt;</code>, calls <code>read_books</code> and 
    <code>save_results</code>. <code>read_books</code> calls <code>get_book</code>, <code>split_words</code>, and <code>count_words</code>. 
    By comparing cumulative times, we see that most of <code>&lt;module&gt;</code>'s time is spent in <code>read_books</code> and most of 
    <code>read_books</code>'s time is spent in <code>get_book</code>, where we make our HTTP request, making this script (unsurprisingly) 
    I/O bound.
  </p>

  <p>
      Next, let's take a look at how we can be even more granular by profiling our code line-by-line.
  </p>

  <BlogHeading1>Profiling Line-by-Line</BlogHeading1>

  <p>
    Once we've used cProfile to get a sense of what function calls are taking the most time, we can examine those functions line-by-line 
    to get an even clearer picture of where our time is being spent.
  </p>

  <p>
    For this, we'll need to install the <code>line-profiler</code> library with the following command:
  </p>

  <BlogCodeBlock 
    lang="bash"
    content="$ pip install line-profiler"
  />

  <p>
    Once installed, we just need to add the <code>@profile</code> decorator to the function we want to profile. 
    Here's the updated snippet from our script:
  </p>

  <BlogCodeBlock
    lang="python"
    content="{
`@profile
def read_books(urls):
  """For each url in urls, 
  load the book and count the words"""
  # Create a place to store word counts
  word_counts = {}
  # For each book: load it, count words, store the counts
  for title, path in urls.items():
    book = get_book(path)
    words = split_words(book)
    counts = count_words(words)
    word_counts[title] = counts.most_common()[:10]
  return word_counts`
    }"
  />

  <p>
    Note the fact that we don't need to import the <code>profile</code> decorator function — it will be injected 
    by <code>line-profiler</code>.
  </p>

  <p>
    Now, to profile our function, we can run the following:
  </p>

  <BlogCodeBlock
    lang="bash"
    content="$ kernprof -l -v script-prof.py"
  />

  <p>
    <code>kernprof</code> is installed along with <code>line-profiler</code>. The <code>-l</code> flag tells 
    <code>line-profiler</code> to go line-by-line and the <code>-v</code> flag tells it to print the result to the 
    terminal rather than save it to a file.
  </p>

  <p>
    The result for our script would look something like this:
  </p>

  <BlogCodeBlock
    lang="text"
    content="{
`Wrote profile results to script-profile.py.lprof
Timer unit: 1e-06 s

Total time: 5.62982 s
File: script-profile.py
Function: read_books at line 19

Line #  Hits       Time  Per Hit  % Time  Line Contents
========================================================
    19                                    @profile
    20                                    def read_books(urls):
    21                                      """For each url in urls, 
    22                                      load the book and count the words"""
    23                                      # Create a place to store word counts
    24     1        1.0       1.0    0.0    word_counts = {}
    25                                      # Per book: load, count words, store counts
    26     6       15.0       2.5    0.0    for title, path in urls.items():
    27     5  5038674.0 1007734.8   89.5      book = get_book(path)
    28     5   431378.0   86275.6    7.7      words = split_words(book)
    29     5   121321.0   24264.2    2.2      counts = count_words(words)
    30     5    38429.0    7685.8    0.7      word_counts[title] = counts.most_common()[:10]
    31     1        0.0       0.0    0.0    return word_counts`
    }"
  />

  <p>
    The key column to focus on here is <code>% Time</code>. As you can see, 89.5% of our time parsing each book is spent in 
    the <code>get_book</code> function — making the HTTP request — further validation that our program is I/O bound rather 
    than CPU bound.
  </p>

  <p>
    Now, with this <span class="italic">new</span> info in mind, if we wanted to speed up our code we wouldn't want to waste 
    our time trying to make our word counter more efficient. It only takes a fraction of the time compared to the HTTP request. 
    Instead, we'd focus on speeding up our requests — possibly by making them asynchronously.
  </p>

  <p>
    Here, the results are hardly surprising, but on a larger and more complicated program, <code>line-profiler</code> is an 
    invaluable tool in our programming tool belt, allowing us to peer under the hood of our program and find the computational 
    bottlenecks.
  </p>

  <BlogHeading1>Profiling Memory</BlogHeading1>

  <p>
    In addition to profiling the time-complexity of our program, we can also profile its memory-complexity.
  </p>
    
  <p>
    In order to do line-by-line memory profiling, we'll need to install the <code>memory-profiler</code> library which also uses the 
    same <code>@profile</code> decorator to determine which function to profile.
  </p>
    
  <BlogCodeBlock
    lang="bash"
    content="{
`$ pip install memory-profiler
$ python -m memory_profiler script.py`
    }"
  />

  <p>
    The result of running <code>memory-profiler</code> on our same script should look something like the following:
  </p>

  <BlogCodeBlock
    lang="text"
    content="{
`Filename: script.py

Line #    Mem usage    Increment   Line Contents
================================================
    19   38.426 MiB   38.426 MiB   @profile
    20                             def read_books(urls):
    21                               """For each url in urls, 
    22                               load the book and count the words"""
    23                               # Create a place to store word counts
    24   38.426 MiB    0.000 MiB     word_counts = {}
    25                               # For each book: load it, count words, store the counts
    26   85.438 MiB    0.000 MiB     for title, path in urls.items():
    27   72.137 MiB    9.281 MiB       book = get_book(path)
    28   95.852 MiB   23.715 MiB       words = split_words(book)
    29   85.438 MiB    0.496 MiB       counts = count_words(words)
    30   85.438 MiB    0.254 MiB       word_counts[title] = counts.most_common()[:10]
    31   85.438 MiB    0.000 MiB     return word_counts`
    }"
  />

  <p>
    There are currently some <a class="underline" href="https://github.com/pythonprofilers/memory_profiler/issues/236">issues</a> 
    with the accuracy of the “Increment” so just focus on the “Mem usage” column for now.
  </p>

  <p>
    Our script had peak memory usage on line 28 when we split the books up into words.
  </p>

  <BlogHeading1>Conclusion</BlogHeading1>

  <p>
    Hopefully, now you'll have a few new tools in your programming tool belt to help you write more efficient code and quickly determine 
    how to best spend your optimization-time.
  </p>

  <p>
    You can read more about <a class="underline" href="https://docs.python.org/3/library/profile.html">cProfile here</a>, 
    <a class="underline" href="https://github.com/pyutils/line_profiler">line-profiler here</a>, and 
    <a class="underline" href="https://github.com/pythonprofilers/memory_profiler">memory-profiler here</a>. I also highly recommend the 
    book High Performance Python, by Micha Gorelick and Ian Ozsvald [1].
  </p>

  <BlogHeading1>References</BlogHeading1>

  <p>
    [1] M. Gorelick and I. Ozsvald, <a class="underline" href="https://www.oreilly.com/library/view/high-performance-python/9781492055013/">
    High Performance Python 2nd Edition</a> (2020), O'Reilly Media, Inc.
  </p>

</BlogBody>