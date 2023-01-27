<script>
  import Nav from '$lib/Nav.svelte';
  import LinkIcon from '$lib/icons/LinkIcon.svelte';
</script>

<svelte:head>
  <title>About Austin</title>
</svelte:head>

<Nav activePage={"about"} />

<!-- Page Header -->
<div class="relative bg-slate-900 px-8 py-20 md:py-24">
  <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-300 sm:text-4xl">
    About Me
  </h2>
  <div class="mx-auto mt-4 max-w-xl text-center text-xl text-gray-500 space-y-2">
    <p>
      I'm a full-stack developer living in Los Angeles, CA.
      I like working with data, building APIs, and designing interfaces.
    </p>
  </div>
</div>

<!-- Page Content -->
<div class="my-8 mx-auto px-12 max-w-4xl space-y-8">

  <!-- More About Me -->
  <section id="intro" class="space-y-3">
    <a class="flex items-center group" href="#intro">
      <h3 class="text-2xl font-semibold">
        Intro
      </h3>
      <span class="mx-2 invisible group-hover:visible">
        <LinkIcon />
      </span>
      <hr class="flex-grow  mt-1"/>
    </a>

    <p class="text-base">
      I'm a full-stack developer living in Los Angeles, CA. I work at <a class="underline" href="https://commandcredit.net">Command Credit</a> — a business 
      credit reseller based in Rhinebeck, NY — where I manage the company's API and self-service web app.
    </p>

    <p class="text-base">
      I enjoy being a generalist — working with data, building APIs, and designing interfaces — managing the full software and data life-cycle at a company. 
    </p>

    <p class="text-base">
      I've studied and worked in a variety of fields, including medicine (I was a volunteer EMT for two years in high school), film/animation (I worked at a 
      small commercial animation studio for a few years), data science (I graduated from a 3-month intensive data science bootcamp after graduating from 
      college), and software development (I've been working a full-stack developer for the past two years).
    </p>

    <p class="text-base">
      You'll see that the date ranges for my work experience and education interwtine a bit — as I've moved back and forth between fields — finding my 
      passion for data and software engineering and building my skillset.
    </p>

    <p class="text-base">
      Currently, I'm learning more about data engineering and data science, and I'm interested in working with data at a larger scale.
    </p>

  </section>


  <!-- Work Experience -->
  <section id="work" class="space-y-2">
    <a class="flex items-center group" href="#work">
      <h3 class="text-2xl font-semibold">
        Work Experience
      </h3>
      <span class="mx-2 invisible group-hover:visible">
        <LinkIcon />
      </span>
      <hr class="flex-grow mt-1"/>
    </a>

    <div class="divide-y divide-dashed divide-slate-600">

      <!-- Command Credit -->
      <div class="py-6">
        <h4 class="text-lg font-semibold">
          <span class="">Full Stack Developer</span>
          <span class="">@</span>
          <span class="">Command Credit Corp</span>
        </h4>
        <p class="text-sm font-semibold">
          <span>April 2021</span>
          <span>-</span>
          <span>Present</span>
          <span>|</span>
          <span>Remote</span>
        </p>
        <ul class="list-disc list-outside pl-3">
          <li>
            Inherited full-stack support and development responsibilities for two web commerce systems with 
            API interfaces to major credit bureaus in my third month of tenure.
          </li>
          <li>
            Designed and implemented an internal API to standardize and simplify software architecture across 
            two systems built by multiple teams.
          </li>
          <li>
            Proposed and designed an AWS-based standard architecture replatforming strategy to save the 
            firm money and reduce operational risks.
          </li>
        </ul>
      </div>

      <!-- Freelance Data Analyst -->
      <div class="py-6">
        <h4 class="text-lg font-semibold">
          <span class="">Data Analyst</span>
          <span class="">@</span>
          <span class="">Freelance</span>
        </h4>
        <p class="text-sm font-semibold">
          <span>March 2020</span>
          <span>-</span>
          <span>April 2021</span>
          <span>|</span>
          <span>Remote</span>
        </p>
        <ul class="list-disc list-outside pl-3">
          <li>
            Identified, collected, merged, normalized, and presented longitudinal US census and population health data on murders, 
            suicides, and overdose deaths to inform City University of New York's professor's research on population health trends 
            in coastal South Carolina.
          </li>
          <li>
            Developed a web scraper to gather, consolidate, normalize, and present City of Canton, OH housing code violations and 
            low-interest loan application site data into Excel reports to inform City's Low-Interest Loan Community Redevelopment 
            investment targeting.
          </li>
          <li>
            Healthcare provider profiles and market share data acquisition, consolidation, and analysis model for NTT Data Systems 
            healthcare industry vertical.
          </li>
        </ul>
      </div>

      <!-- Metis -->
      <div class="py-6">
        <h4 class="text-lg font-semibold">
          <span class="">Data Science Fellow</span>
          <span class="">@</span>
          <span class="">Metis Data Science Bootcamp</span>
        </h4>
        <p class="text-sm font-semibold">
          <span>Jan 2020</span>
          <span>-</span>
          <span>March 2020</span>
          <span>|</span>
          <span>New York, NY</span>
        </p>
        <ul class="list-disc list-outside pl-3">
          <li>
            Highly selective, accredited 12-week immersive data science bootcamp focused on Python, statistical modeling, 
            machine learning, visualization, and communication of results.
          </li>
          <li>
            Based on 5 self-directed projects covering EDA, linear regression & web scraping, classification & visualization, 
            NLP & NoSQL, and Deep Learning.
          </li>
        </ul>
      </div>

      <!-- Break While @ School -->
      <div class="py-6">
        <h4 class="text-base italic">
          <a href="#education">
            {'{{'} Full-Time Student at Sarah Lawrence College {'}}'}
          </a>
        </h4>
      </div>

      <!-- CHRLX -->
      <div class="py-6">
        <h4 class="text-lg font-semibold">
          <span class="">Assistant to the Executive Creative Director</span>
          <span class="">@</span>
          <span class="">CHRLX</span>
        </h4>
        <p class="text-sm font-semibold">
          <span>October 2014</span>
          <span>-</span>
          <span>July 2017</span>
          <span>|</span>
          <span>New York, NY</span>
        </p>
        <ul class="list-disc list-outside pl-3">
          <li>
            Managed the Exec. Creative Director's schedule, tasks, and priorities with internal team members, 
            freelancers, and clients.
          </li>
          <li>
            Coordinated across multiple teams of staff, contractors, and clients in a fast-paced, deadline-oriented 
            creative environment.
          </li>
          <li>
            Served as an on-site project coordinator to coordinate with producers and technical staff regarding 
            client project deliveries and issue resolution.
          </li>
        </ul>
      </div>

    </div>
  </section>


  <!-- Education -->
  <section id="education" class="space-y-2">
    <a class="flex items-center group" href="#education">
      <h3 class="text-2xl font-semibold">
        Education
      </h3>
      <span class="mx-2 invisible group-hover:visible">
        <LinkIcon />
      </span>
      <hr class="flex-grow  mt-1"/>
    </a>
    
    
    <div class="divide-y divide-dashed divide-slate-600">

      <!-- Sarah Lawrence -->
      <div class="py-6">
        <h4 class="text-lg font-semibold">
          <span class="">BA in Computer Science</span>
          <span class="">from</span>
          <span class="">Sarah Lawrence College</span>
        </h4>
        <p class="text-sm font-semibold">
          <span>Dec 2019</span>
          <span>|</span>
          <span>Bronxville, NY</span>
        </p>

        <ul class="list-none list-inside mt-3">
          <li>
            Select courses:
            <ul class="list-disc list-outside pl-3">
              <li>Bio-Inspired Artificial Intelligence</li>
              <li>Databases</li>
              <li>Computer Architecture</li>
              <li>Quantum Computing</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>

  
  <!-- Skills -->
  <section id="skills" class="space-y-2">
    <a class="flex items-center group" href="#skills">
      <h3 class="text-2xl font-semibold">
        Skills
      </h3>
      <span class="mx-2 invisible group-hover:visible">
        <LinkIcon />
      </span>
      <hr class="flex-grow  mt-1"/>
    </a>
    
    <ul class="list-disc list-inside">
      <li>Go</li>
      <li>Python</li>
      <li>JavaScript/TypeScript</li>
      <li>SQL</li>
      <li>Docker</li>
      <li>AWS</li>
      <li>GCP</li>
      <li>REST APIs</li>
      <li>gRPC APIs</li>
      <li>React</li>
      <li>Svelte</li>
      <li>PostgreSQL</li>
      <li>MySQL</li>
      <li>MongoDB</li>
      <li>TensorFlow</li>
    </ul>
  </section>
  
  
  <!-- Certifications -->
  <section id="certifications" class="space-y-2">
    <a class="flex items-center group" href="#certifications">
      <h3 class="text-2xl font-semibold">
        Certifications
      </h3>
      <span class="mx-2 invisible group-hover:visible">
        <LinkIcon />
      </span>
      <hr class="flex-grow  mt-1"/>
    </a>

    <ul class="list-none list-inside">
      <li class="font-medium">
        <a href="https://www.youracclaim.com/badges/7b719925-2f06-47f3-9ef6-0aab7b03d645/public_url">
          <span class="text-gray-400 mr-1">
            [January 2021] 
          </span>
          <span class="text-gray-200 font-semibold">
            AWS Certified Cloud Practitioner
          </span>
        </a>
      </li>
    </ul>
  </section>

</div>
