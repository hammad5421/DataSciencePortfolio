import { ResumeData } from "./types";

export const resumeData: ResumeData = {
  contact: [
    {
      name: "Email",
      text: "me@austinpoor.com",
      link: "mailto:me@austinpoor.com",
      icon: ""
    },
    {
      name: "LinkedIn",
      text: "/in/austinpoor",
      link: "https://linkedin.com/in/austinpoor",
      icon: ""
    },
    {
      name: "GitHub",
      text: "a-poor",
      link: "https://github.com/a-poor",
      icon: ""
    },
    {
      name: "Medium",
      text: "@apoor",
      link: "https://medium.com/@apoor",
      icon: ""
    },
    {
      name: "Twitter",
      text: "@austin_poor",
      link: "https://twitter.com/austin_poor",
      icon: ""
    }
  ],
  skills: {
    languages: [
      "Python",
      "Go",
      "SQL (MySQL)",
      "SQL (Postgres)",
      "JavaScript",
      "NoSQL (MongoDB)",
      "NoSQL (DynamoDB)",
      "Bash"
    ],
    tools: [
      "Docker",
      "AWS",
      "Git",
      "Scipy Stack",
      "TensorFlow",
      "XGBoost",
      "FastAPI",
      "REST",
      "gRPC",
      "Excel"
    ]
  },
  experience: [
    {
      title: "Full Stack Developer",
      company: "Command Credit Corp.",
      location: "Remote",
      startDate: "April 2021",
      endDate: "Present",
      bullets: [
        "Inherited full-stack support and development responsibilities for two web commerce systems with API interfaces to major credit bureaus in my third month of tenure.",
        "Designed and implemented an internal API to standardize and simplify software architecture across two systems built by multiple teams.",
        "Proposed and designed an AWS-based standard architecture replatforming strategy to save the firm money and reduce operational risks."
      ],
      tags: []
    },
    {
      title: "Data Analyst",
      company: "Freelance",
      location: "Remote",
      startDate: "March 2020",
      endDate: "April 2021",
      bullets: [
        "Identified, collected, merged, normalized, and presented longitudinal US census and population health data on murders, suicides, and overdose deaths to inform City University of New York’s professor’s research on population health trends in coastal South Carolina.",
        "Developed a web scraper to gather, consolidate, normalize, and present City of Canton, OH housing code violations and low-interest loan application site data into Excel reports to inform City’s Low-Interest Loan Community Redevelopment investment targeting.",
        "Healthcare provider profiles and market share data acquisition, consolidation, and analysis model for NTT Data Systems healthcare industry vertical."
      ],
      tags: []
    },
    {
      title: "Data Science Fellow",
      company: "Metis Data Science Bootcamp",
      location: "New York, NY",
      startDate: "Jan 2020",
      endDate: "March 2020",
      bullets: [
        "Highly selective, accredited 12-week immersive data science bootcamp focused on Python, statistical modeling, machine learning, visualization, and communication of results.",
        "Based on 5 self-directed projects covering EDA, linear regression & web scraping, classification & visualization, NLP & NoSQL, and Deep Learning."
      ],
      tags: []
    },
    {
      title: "Production Assistant",
      company: "Various Productions",
      location: "New York, NY",
      startDate: "July 2017",
      endDate: "Dec 2019",
      bullets: [
        "Worked part-time as a video production assistant while attending college full-time to complete a BA in Computer Science."
      ],
      tags: []
    },
    {
      title: "Assistant to the Executive Creative Director",
      company: "CHRLX",
      location: "New York, NY",
      startDate: "October 2014",
      endDate: "",
      bullets: [
        "Managed the Exec. Creative Director’s schedule, tasks, and priorities with internal team members, freelancers, and clients.",
        "Coordinated across multiple teams of staff, contractors, and clients in a fast-paced, deadline- oriented creative environment.",
        "Served as an on-site project coordinator to coordinate with producers and technical staff regarding client project deliveries and issue resolution."
      ],
      tags: []
    }
  ],
  education: [
    {
      title: "BA in Computer Science",
      school: "Sarah Lawrence College",
      location: "New York, NY",
      graduationDate: "Dec 2019",
      courses: [
        "Bio-Inspired Artificial Intelligence", 
        "Databases", 
        "Computer Architecture", 
        "Quantum Computing"
      ],
      tags: []
    }
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      date: "Jan 2021",
      link: "https://www.credly.com/badges/7b719925-2f06-47f3-9ef6-0aab7b03d645/public_url",
      tags: []
    }
  ],
  projects: [
    {
      title: "Algorithmic Color Palettes",
      description: [
        "Experimenting with using ML clustering algorithms to generate color palettes from images.",
        "Using K-Means Clustering and Agglomerative Clustering on movie stills.",
        "Check out the GitHub repo, the blog post on Towards Data Science, or the Jupyter Notebook using Binder."
      ],
      tags: [
        "Python",
        "Pillow",
        "Scikit-Learn",
        "K-Means",
        "Agglomerative Clustering"
      ],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/a-poor/color-palettes"
        },
        {
          name: "Blog Post",
          link: "https://towardsdatascience.com/algorithmic-color-palettes-a110d6448b5d"
        },
        {
          name: "Binder",
          link: "https://mybinder.org/v2/gh/a-poor/color-palettes/main?filepath=color-palettes.ipynb"
        }
      ]
    },
    {
      title: "Spotify Track Skip Prediction",
      description: [
        "Experimenting with using ML clustering algorithms to generate color palettes from images.",
        "Using K-Means Clustering and Agglomerative Clustering on movie stills.",
        "Check out the GitHub repo, the blog post on Towards Data Science, or the Jupyter Notebook using Binder."
      ],
      tags: [
        "Python",
        "Pillow",
        "Scikit-Learn",
        "K-Means",
        "Agglomerative Clustering"
      ],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/a-poor/spotify-skip-prediction"
        },
        {
          name: "Blog Post",
          link: "https://towardsdatascience.com/predicting-spotify-track-skips-49cf4a48b2a5"
        }
      ]
    },

    {
      "title": "D3 – Exploring Gender Representation",
      "description": [
        "Using D3 and ObservableHQ to visualize the unbalanced gender representation among artists in US museums.",
        "Read more about about the data and see the visual at the link below."
      ],
      "tags": [
        "JavaScript",
        "D3.js",
        "ObservableHQ"
      ],
      "links": [
        {
          "name": "ObservableHQ Notebook",
          "link": "https://observablehq.com/@a-poor/exploring-artist-representation-data"
        }
      ]
    },
    {
      "title": "D3 – Visualizing Common Distributions",
      "description": [
        "Using D3 and ObservableHQ to visualize some common probability distributions with various parameters."
      ],
      "tags": [
        "JavaScript",
        "D3.js",
        "ObservableHQ"
      ],
      "links": [
        {
          "name": "ObservableHQ Notebook",
          "link": "https://observablehq.com/@a-poor/visualizing-distributions"
        }
      ]
    },
    {
      "title": "D3 – Visualizing Bayesian Thinking",
      "description": [
        "Using D3 and ObservableHQ to create an interactive visualization of the \"Librarian vs Farmer\" question from Daniel Kahneman’s book Thinking, Fast and Slow, from a Bayesian perspective."
      ],
      "tags": [
        "JavaScript",
        "D3.js",
        "ObservableHQ"
      ],
      "links": [
        {
          "name": "ObservableHQ Notebook",
          "link": "https://observablehq.com/@a-poor/visualizing-bayesian-thinking"
        }
      ]
    }
  ],
  blogPosts: [
    {
      "publication": "Towards Data Science",
      "title": "Serving ML Models with gRPC",
      "subtitle": "Skip REST and give gRPC a try",
      "date": "Dec 2021",
      "link": "https://towardsdatascience.com/serving-ml-models-with-grpc-2116cf8374dd",
      "description": "gRPC APIs are fast, efficient, and type-safe. Next time you need to create an ML prediction service, ditch REST and give gRPC a shot!",
      "tags": [
        "API",
        "gRPC",
        "REST API",
        "Data Science",
        "Machine Learning",
        "Data"
      ]
    },
    {
      "publication": "Towards Data Science",
      "title": "Handling ML Predictions in a Flask App",
      "subtitle": "Don’t let long-running code slow down your Flask app",
      "date": "Feb 2021",
      "link": "https://towardsdatascience.com/handling-ml-predictions-in-a-flask-app-1ccfeff06326",
      "description": "Two suggested design patterns for making machine learning predictions (or handling other long-running tasks) in Flask apps by adding API routes and Celery.",
      "tags": [
        "Data Science",
        "Machine Learning",
        "Python",
        "Flask",
        "API",
        "Celery"
      ]
    },
    {
      "publication": "Towards Data Science",
      "title": "Painless Data Augmentation with BigQuery",
      "subtitle": "Quickly Augmenting Your Datasets with BigQuery Public Data",
      "date": "Jan 2021",
      "link": "https://towardsdatascience.com/painless-data-augmentation-with-bigquery-da1e30002af3",
      "description": "Google Cloud’s BigQuery is a great tool for data scientists to easily augment their datasets with external data – using BigQuery's public datasets…",
      "tags": [
        "Data Science",
        "Data",
        "SQL",
        "BigQuery",
        "Data Augmentation",
        "Data Engineering",
        "Google Cloud Platform (GCP)"
      ]
    },
    {
      "publication": "Towards Data Science",
      "title": "Algorithmic Color Palettes",
      "subtitle": "Using Machine Learning to Generate Color Palettes from Images",
      "date": "Oct 2020",
      "link": "https://towardsdatascience.com/algorithmic-color-palettes-a110d6448b5d",
      "description": "Algorithmic Color Palettes: Using Unsupervised Machine Learning algorithms to generate color palettes from film stills.",
      "tags": [
        "Data Science",
        "Machine Learning",
        "Unsupervised Learning",
        "Clustering",
        "Color",
        "Computer Vision",
        "Sci-Kit Learn"
      ]
    },
    {
      "publication": "Towards Data Science",
      "title": "Data Scientists, Start Using Profilers",
      "subtitle": "Find the parts of your algorithm that are ACTUALLY slowing you down",
      "date": "Aug 2020",
      "link": "https://towardsdatascience.com/data-scientists-start-using-profilers-4d2e08e7aec0",
      "description": "A profiler can show you exactly which parts are taking the most time, allowing you to see which sections to spend time optimizing to speed up your code.",
      "tags": [
        "Data Science",
        "Programming",
        "Algorithm",
        "Python",
        "Profiler"
      ]
    },
    {
      "publication": "Towards Data Science",
      "title": "Take Full Control of Your Python Plots with Jinja",
      "subtitle": "Create fully custom plots in Python with SVG and Jinja",
      "date": "Jul 2020",
      "link": "https://towardsdatascience.com/take-full-control-of-your-python-plots-with-jinja-15496a7ebf1d",
      "description": "Next time you want to make a fully customized plot in Python ditch matplotlib and try Jinja. Here's a short tutorial to help you get started.",
      "tags": [
        "Python",
        "Jinja",
        "Data Visualization",
        "Data Science",
        "SVG",
        "Plot"
      ]
    },
    {
      "publication": "Towards Data Science",
      "title": "Predicting Spotify Track Skips",
      "subtitle": "Working on the Spotify Sequential Skip Prediction Challenge",
      "date": "Feb 2020",
      "link": "https://towardsdatascience.com/predicting-spotify-track-skips-49cf4a48b2a5",
      "description": "Metis Data Science Bootcamp project using machine learning to predict Spotify user track skips for the \"Spotify Sequential Skip Prediction Challenge\".",
      "tags": [
        "Python",
        "Data Science",
        "Machine Learning",
        "Bootcamp",
        "Spotify",
        "PostgreSQL",
        "SQL"
      ]
    },
    {
      "title": "Quickly Load CSVs Into PostgreSQL Using Python and Pandas",
      "subtitle": "Use Pandas to quickly create and populate a Postgres database",
      "date": "Feb 2020",
      "link": "https://medium.com/@apoor/quickly-load-csvs-into-postgresql-using-python-and-pandas-9101c274a92f",
      "description": "Learn a fast way to use Python and Pandas to import CSV data into a Postgres database. Let Pandas infer data types and create the SQL schema for you.",
      "tags": [
        "SQL",
        "CSV",
        "Data Engineering",
        "Data Science",
        "Python",
        "ETL",
        "Pandas"
      ]
    }
  ]
}
