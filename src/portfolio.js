
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harsh Gupta",
  title: "Hi all, I'm Harsh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web  with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12A6P5Q0-WAzOtGsX3xwFGNyAonK-ocTA/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Harsh28r",
  linkedin: "https://www.linkedin.com/in/harsh-gupta-313380205/",
  gmail: "harshgupta0028@gmail.com",
  gitlab: "https://gitlab.com/harshgupta0028",
  facebook: "/",
  medium: "/",
  stackoverflow: "/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

 
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    // {
    //   skillName: "C++",
    //   fontAwesomeClassname: "fab fa-C++"
    // },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },

      {
        skillName:"Git",
      fontAwesomeClassname:"fab fa-github-square"
    },
    {
      skillName:"DevOps",
    fontAwesomeClassname:"fab fa-dev"
  },

  {
    skillName:"Figma",
  fontAwesomeClassname:"fab fa-figma style='font-size:48px;color:red"
}
,
{
  skillName:"Wordpress",
fontAwesomeClassname:"fab fa-wordpress"
}








  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "St.Francis Institute of Technology",
      logo: require("./assets/assets/images/edu1.png"),
      subHeader: "Bachelor of Enggineering in Electronic & Telecommunication",
      duration: "Present",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      
    },
    {
      schoolName: "Abhinav Jr. College of science,Commerce & Arts",
      logo: require("./assets/assets/images/stanfordLogo.png"),
      subHeader: "higher secondary certificate in Information Technology ",
      duration: " 2018 - 2020",
      descBullets: ["Explored some  knowledgwed   in various subject."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer(Intern)",
      company: "Mobbana",
      companylogo: require("./assets/assets/images/mobbana-medium.png"),
      date: "Nov 2022 – Feb 2023 ",
      desc: "Engaged in a dynamic internship focused on developing and enhancing Chrome extensions, including Mobbana and Prosender. Demonstrated proficiency in React.js, Git, Software Development, GitHub, Dev tools, and JavaScript. Spearheaded the integration of WhatsApp API, showcasing leadership and technical skills in real-world projects..",
      descBullets: [
        
        
      ]
    },
    {
      role: "Front-End Developer(intern)",
      company: "Sparks Foundation",
      companylogo: require("./assets/assets/images/logo_small.png"),
      date: " May-july 2022",
      desc: "Led a student community web development project, overseeing both design and development.Designed a user-friendly structure using Figma.Implemented the website with HTML5, CSS3, Bootstrap, and JavaScript for dynamic and responsive functionality."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Some Projects",
  subtitle: "SOME GOOD PROJECTS ",
  projects: [
    {
      image: require("./assets/assets/images/Food Fire Logo.png"),
      projectName: "FoodWala",
      projectDesc: "Dynamic user-friendly UI/UX website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://foodappwithharsh.netlify.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/assets/images/output1.jpg"),
      projectName: "एकरक्त",
      projectDesc: "Blood-donation using Blockchain technology",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blockchain-theta-two.vercel.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/assets/images/logo_small.png"),
      projectName: "Sparks",
      projectDesc: "Designed a user-friendly structure ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://harsh28r.github.io/paymentgateway/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Mobbana",
      subtitle:
        "Worked with Chrome extension Start-up  provided Whatsapp web feature to  5K+ users ",
      image: require("./assets/assets/images/mobbana-logo.png"),
      imageAlt: "BB",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jJDgP4pyoIURgefWpSbMdk2Yuw7rJi9v/view?usp=sharing"
        }
      ]
    },
    {
      title: "Sparks Foundation",
      subtitle:
        "Developed a Frontend website for collecting  donation  for needy one.",
      image: require("./assets/assets/images/logo_small.png"),
      imageAlt: "Sparks Foundation Logo",
      footerLink: [
        {
          name: "certificate",
          url: "https://drive.google.com/file/d/1s9VOrAD5O8F5bz0q-EA2dMx4IW8Eeb_X/view?usp=sharing"
        }
      ]
    },
    {
      title: "Flipkart ",
      subtitle:
        "Participated Virtual programme named as Grid 5.0",
      image: require("./assets/assets/images/logo-flipkart-png-flipkart-logo-vector-300.png"),
      imageAlt: "flip Logo",
      footerLink: [
        {
          name: "certificate",
          url: "https://drive.google.com/file/d/1iTTFhThyUKFZjXsR1O6oypkp9M8VGjC4/view?usp=sharing"
        }
      ]
    },
    {
      title: "JP Morgan Chase & co.",
      subtitle: "Completed Certifcation Jp Morgan  Chase",
      image: require("./assets/assets/images/JP-Morgan-Chase-Logo-120x67.png"),
      imageAlt: "jpLogo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1adw52PJlF85UpiSNR8GBF2L25CAzzoNW/view?usp=sharing"},
        {
          name: "Final Project",
          url: "/"
        },
        
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};






const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7822952756",
  email_address: "harshgupta0028@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: " ", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  // twitterDetails,
  isHireable
};

