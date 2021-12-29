import React, { useState, useEffect } from 'react';
import './App.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import LinkIcon from '@mui/icons-material/Link';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const someText = `I'm a data scientist and full-stack developer with experience in Python, Go, SQL, and JavaScript. I have 4+ years of experience in outcome-oriented, collaborative team environments. I have a degree in computer science and certificates in data science and cloud computing. I'm a self-starter, analytic-thinker, and problem solver. I'm a data scientist and full-stack developer with experience in Python, Go, SQL, and JavaScript. I have 4+ years of experience in outcome-oriented, collaborative team environments. I have a degree in computer science and certificates in data science and cloud computing. I'm a self-starter, analytic-thinker, and problem solver.`;


function IntroComponent({  }) {
  return (
    <Box className="resume-section">
      <Typography variant="h3" component="div" gutterBottom>
        Hi, I'm Austin!
      </Typography>
      <Typography variant="subtitle1" component="div" gutterBottom>
        My name is Austin Poor and I'm a full-stack developer living in Seattle, WA.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        I'm a data scientist and full-stack developer with experience in Python, Go, SQL, and JavaScript. I have 4+ years of experience in outcome-oriented, collaborative team environments. I have a degree in computer science and certificates in data science and cloud computing. I'm a self-starter, analytic-thinker, and problem solver.
      </Typography>
    </Box>
  );
}

function ContactComponent({  }) {
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

function SkillsComponent({  }) {
  return (
    <Box className="resume-section" id="skills">
      <Typography variant="h4" component="h1" gutterBottom>
        Skills
        <IconButton style={{ marginLeft: "5px", }} href="#skills">
          <LinkIcon />
        </IconButton>
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        { someText }
      </Typography>
    </Box>
  );
}

function ExperienceComponent({  }) {
  return (
    <Box className="resume-section" id="experience">
      <Typography variant="h4" component="h1" gutterBottom>
        Experience
        <IconButton style={{ marginLeft: "5px", }} href="#experience">
          <LinkIcon />
        </IconButton>
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        { someText }
      </Typography>
    </Box>
  );
}

function ProjectsComponent({  }) {
  return (
    <Box className="resume-section" id="projects">
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
        <IconButton style={{ marginLeft: "5px", }} href="#projects">
          <LinkIcon />
        </IconButton>
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        { someText }
      </Typography>
    </Box>
  );
}

function BlogPostsComponent({  }) {
  return (
    <Box className="resume-section" id="blog-posts">
      <Typography variant="h4" component="h1" gutterBottom>
        Blog Posts
        <IconButton style={{ marginLeft: "5px", }} href="#blog-posts">
          <LinkIcon />
        </IconButton>
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        { someText }
      </Typography>
    </Box>
  );
}

function EducationComponent({  }) {
  return (
    <Box className="resume-section" id="education">
      <Typography variant="h4" component="h1" gutterBottom>
        Education
        <IconButton style={{ marginLeft: "5px", }} href="#education">
          <LinkIcon />
        </IconButton>
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        { someText }
      </Typography>
    </Box>
  );
}

function BackToTopComponent({}) {
  const [scrollTop, setScrollTop] = useState(true);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
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

function App() {
  return (
    <div className="App">
      <div style={{ height: '50px' }} />
      <Container>
        <IntroComponent />
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <ContactComponent />
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <SkillsComponent />
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <ExperienceComponent />
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <EducationComponent />
        <Divider variant="middle" style={{ margin: "20px", }}/>

        {/* <CertificationsComponent />
        <Divider variant="middle" style={{ margin: "20px", }}/> */}

        <ProjectsComponent />
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <BlogPostsComponent />
        <Divider variant="middle" style={{ margin: "20px", }}/>

        <BackToTopComponent />
      </Container>
    </div>
  );
}

export default App;
