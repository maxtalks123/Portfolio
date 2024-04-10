import "/public/grumbledemo.png";
import "/public/Pandi_image.png";
import "/public/Socialmediasite.png";
import Projects from "./Projects";

export default function ProjectsDisplay() {
  return (
    <>
      <Projects
        projectname="Grumble"
        projectimage="/grumbledemo.png"
        projectalt="showing off the grumble platform"
        projectdescr="A group description where I created tinder for restaurants with my team, an app focussed on sleek user design, coded entirely in typescript and using Daisy UI."
        githublink="https://github.com/RossG789/final-week-project"
        livelink="https://final-week-project.vercel.app/"
      />
      <Projects
        projectname="Memories of the Pandi"
        projectimage="/Pandi_image.png"
        projectalt="showing off the memories of the pandi platform"
        projectdescr="Another group project, this was completed in vanilla javascript and features animations using anime.js, mobile responsiveness using media queries and a responsive form"
        githublink="https://github.com/Lima7048/Memories-of-the-Pandi"
        livelink="https://memoriesofthepandiclient.onrender.com/"
      />
      <Projects
        projectname="My own unique social media site"
        projectimage="/Socialmediasite.png"
        projectalt="showing off the memories my own social media platform"
        projectdescr="This was a solo project, created over the course of 3 days using Next.js and allowing sign-up and sign-in functionality using Clerk. Uses SQL queries and a vercel database to store user information and also dynamic routes to show user profiles. Sorting functionality too."
        githublink="https://github.com/maxtalks123/week8project/tree/main/week8project"
        livelink="https://week8project.vercel.app/"
      />
    </>
  );
}
