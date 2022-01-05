import React, { useState, useEffect } from 'react';
import './App.css';

// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
// import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// import type {} from '@mui/lab/themeAugmentation';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import LinkIcon from '@mui/icons-material/Link';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import TagList from './TagList';
import { TimelineContainer } from './Timeline';
import { resumeData } from "./data";
import { 
  ContactData,
  SkillData,
  ExperienceData,
  EducationData,
  CertificationData,
  ProjectLinkData,
  ProjectData,
  BlogPostData,
  ResumeData,
} from "./types";

const someText = "Some text, some text, some text.";


function IntroComponent() {
  return (
    <Box className="resume-section">
      <Typography variant="h3" component="div" gutterBottom>
        {"Hi, I'm Austin!"}
      </Typography>
      <Typography variant="subtitle1" component="div" gutterBottom>
        {"My name is Austin Poor and I'm a full-stack developer living in Seattle, WA."}
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        {"I'm a data scientist and full-stack developer with experience in Python, Go, SQL, and JavaScript. I have 4+ years of experience in outcome-oriented, collaborative team environments. I have a degree in computer science and certificates in data science and cloud computing. I'm a self-starter, analytic-thinker, and problem solver."}
      </Typography>
    </Box>
  );
}

function ContactComponent() {
  return (
    <Box className="resume-section" id="contact-me">
      <Typography variant="h4" component="div" gutterBottom>
        Contact Me 
        <IconButton style={{ marginLeft: "5px", }} href="#contact-me">
          <LinkIcon />
        </IconButton>
      </Typography>
      <List style={{ maxWidth: "500px", }}>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={<span>Email: <Link href="mailto:me@austinpoor.com">me@austinpoor.com</Link></span>}/>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary={<span>LinkedIn: <Link href="https://linkedin.com/in/austinpoor">/in/austinpoor</Link></span>}/>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary={<span>GitHub: <Link href="https://github.com/a-poor">a-poor</Link></span>}/>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary={<span>Medium: <Link href="https://medium.com/@apoor">@apoor</Link></span>}/>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText primary={<span>Twitter: <Link href="https://twitter.com/austin_poor">@austin_poor</Link></span>}/>
        </ListItem>

      </List>
    </Box>
  );  
}

function SkillsComponent({ skills }: {skills: {languages: string[], tools: string[]}}) {
  return (
    <Box className="resume-section" id="skills">
      <Typography variant="h4" component="h1" gutterBottom>
        Skills
        <IconButton style={{ marginLeft: "5px", }} href="#skills">
          <LinkIcon />
        </IconButton>
      </Typography>
      <Typography variant="h5" gutterBottom>
        Languages:
      </Typography>
      <TagList tags={skills.languages} />
      <div style={{ marginTop: "15px", }}/>
      <Typography variant="h5" gutterBottom>
        Tools:
      </Typography>
      <TagList tags={skills.tools} />
    </Box>
  );
}

function ExperienceComponent({ experience = [] }: {experience: ExperienceData[]}) {
  return (
    <Box className="resume-section" id="experience">
      <Typography variant="h4" component="h1" gutterBottom>
        Experience
        <IconButton style={{ marginLeft: "5px", }} href="#experience">
          <LinkIcon />
        </IconButton>
      </Typography>
      
      <style>{ ".experience-item::before { flex: none;}" }</style>
      
      <Timeline
        style={{
          marginLeft: "-35px",
        }}
      >
        {
          experience.map((exp, i) => (
            <TimelineItem 
              key={i}
              className="experience-item"
            >
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                >
                  <Typography variant="h6">
                    { exp.title } @ { exp.company }
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {exp.startDate} - {exp.endDate}; {exp.location}
                  </Typography>
                  {
                    exp.description && (
                        <Typography variant="subtitle2" gutterBottom>
                          { exp.description }
                        </Typography>
                    )
                  }
                  <ul className="experience-bullets">
                    {
                      exp.bullets.map((bullet, j) => (
                        <li 
                          key={j}
                          style={{
                            maxWidth: "750px",
                          }}
                        >
                          <Typography variant="body2" gutterBottom>
                            { bullet }
                          </Typography>
                        </li>
                      ))
                    }
                  </ul>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </Box>
  );
}

function ProjectsComponent({projects} : {projects: ProjectData[]}) {
  return (
    <Box className="resume-section" id="projects">
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
        <IconButton style={{ marginLeft: "5px", }} href="#projects">
          <LinkIcon />
        </IconButton>
      </Typography>

      <style>{ ".experience-item::before { flex: none;}" }</style>
      
      <Timeline
        style={{
          marginLeft: "-35px",
        }}
      >
        {
          projects.map((proj, i) => (
            <TimelineItem 
              key={i}
              className="experience-item"
            >
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                >
                  <Typography variant="h6" gutterBottom>
                    { proj.title }
                  </Typography>
                  {
                    proj.description.map((d, j) => (
                      <Typography key={j} variant="body2" gutterBottom>
                        { d }
                      </Typography>
                    ))
                  }
                  <ButtonGroup variant="outlined" size="small">
                    {
                      proj.links.map((link, j) => (
                        <Button key={j} href={link.link}>
                          { link.name }
                        </Button>
                      ))
                    }
                  </ButtonGroup>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </Box>
  );
}

function BlogPostsComponent({blogPosts} : {blogPosts: BlogPostData[]}) {
  return (
    <Box className="resume-section" id="blog-posts">
      <Typography variant="h4" component="h1" gutterBottom>
        Blog Posts
        <IconButton style={{ marginLeft: "5px", }} href="#blog-posts">
          <LinkIcon />
        </IconButton>
      </Typography>
      <TimelineContainer>
        {
          blogPosts.map((blog, i) => (
            <Box key={i}>
              <Typography variant="h6">
                { blog.title }
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                { blog.subtitle }
              </Typography>
              <Typography variant="body1" gutterBottom>
                { blog.description }
              </Typography>
              <Typography variant="subtitle2">
                Tags:
              </Typography>
              <TagList tags={blog.tags} />
              <div style={{marginTop: "10px", marginBottom: "15px"}}>
                <Button size="small" href={blog.link} variant="outlined">
                  Read More...
                </Button>
              </div>
            </Box>
          ))
        }
      </TimelineContainer>
    </Box>
  );
}

function EducationComponent({education} : {education: EducationData[]}) {
  return (
    <Box className="resume-section" id="education">
      <Typography variant="h4" component="h1" gutterBottom>
        Education
        <IconButton style={{ marginLeft: "5px", }} href="#education">
          <LinkIcon />
        </IconButton>
      </Typography>
      <TimelineContainer>
        {
          education.map((edu, i) => (
            <Box key={i}>
              <Typography variant="h6">
                { edu.title } @ { edu.school }
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {edu.graduationDate ? [edu.graduationDate, "; "] : undefined} {edu.location}
              </Typography>
              {
                edu.courses.length && (
                  <>
                    <Typography variant="subtitle2" gutterBottom>
                      Select Courses:
                    </Typography>
                    <TagList tags={edu.courses} />
                  </>
                )
              }
            </Box>
          ))
        }
      </TimelineContainer>
    </Box>
  );
}

function CertificationsComponent({ certifications }: {certifications: CertificationData[]}) {
  return (
    <Box className="resume-section" id="education">
      <Typography variant="h4" component="h1" gutterBottom>
        Certifications
        <IconButton style={{ marginLeft: "5px", }} href="#education">
          <LinkIcon />
        </IconButton>
      </Typography>
      <TimelineContainer>
        {
          certifications.map((cert, i) => (
            <Box key={i}>
              <Typography variant="h6" gutterBottom>
                { cert.title } ({ cert.date })
              </Typography>
              {
                cert.link && (
                  <Button size="small" href={cert.link} variant="outlined">
                    Certificate Link
                  </Button>
                )
              }
            </Box>
          ))
        }
      </TimelineContainer>
    </Box>
  );
}

function BackToTopComponent() {
  const [scrollTop, setScrollTop] = useState(true);

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <Box 
      style={{ 
        padding: "25px", 
        zIndex: "1",
        position: "fixed",
        bottom: "0",
        right: "0",
      }}
    >
      <Fade in={ !scrollTop }>
        <Fab href="#">
          <KeyboardArrowUpIcon />
        </Fab>
      </Fade>
    </Box>
  );
}

function PageFooter() {
  return (
    <Container
      style={{
        marginTop: "25px",
        marginBottom: "25px",
      }}
    >
      <Typography variant="body1" component="p" gutterBottom align="center">
        © 2021 Austin Poor
      </Typography>
    </Container>
  );
}

function App() {
  return (
    <div className="App">
      <div style={{ height: '25px' }} />
      <Container>
        <IntroComponent />
        <Divider variant="middle" style={{ margin: "20px", }}/>

        {/* <ContactComponent contact={resumeData.contact}/> */}
        <ContactComponent />
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <SkillsComponent skills={resumeData.skills}/>
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <ExperienceComponent experience={resumeData.experience}/>
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <EducationComponent education={resumeData.education}/>
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <CertificationsComponent certifications={resumeData.certifications}/>
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <ProjectsComponent projects={resumeData.projects}/>
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <BlogPostsComponent blogPosts={resumeData.blogPosts}/>
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <PageFooter />

        <BackToTopComponent />
      </Container>
    </div>
  );
}

export default App;
