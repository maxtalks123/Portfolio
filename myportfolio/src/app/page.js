import Link from "next/link";
import "/public/maxpicture.png";
import "/public/grumbledemo.png";
import "/public/Pandi_image.png";
import RiddlePage from "./components/RiddlePage";
import ProjectsDisplay from "./components/ProjectsDisplay";

export default function Home() {
  return (
    <div className="m-4">
      <h1 className="text-6xl font-bold text-center underline">
        Welcome to my portfolio site!
      </h1>
      <div className="mx-auto hero-content text-centerflex-col lg:flex-row max-w-fit m-8 overscroll-contain flex-wrap overflow-hidden">
        <img
          src="maxpicture.png"
          className="max-w-sm rounded-lg shadow-2xl mx-auto p-2  border-white border-2"
        />
        <div className="mx-auto text-center">
          <p className="text-xl py-6 float-left">
            Here you will learn what a great asset I can be at your company.
            Parts of the site are still under development as I continue to learn
            and develop my skills and knowledge.
          </p>
          <Link href="/contactme">
            <button className="btn btn-primary object-center">
              Contact me!
            </button>
          </Link>
        </div>
      </div>
      <div className="text-center mx-auto border-white border-2 rounded-lg m-8 p-4">
        <h1 className="text-2xl underline">Projects Summary:</h1>
        <p>What I am currently working on: Updating my porfolio site</p>
        <div className="hero-content text-center flex-wrap">
          <ProjectsDisplay />
        </div>
      </div>
      <div className="mx-auto border-white border-2 rounded-lg m-8 p-4 text-center">
        <h1 className="text-2xl text-center underline">
          What I can do for you:
        </h1>
        <p className="text-xl text-center">
          I am a keen learner, having experience in both front end and back-end
          technologies, as well as strong foundations in both UI and UX, having
          been a freelance user tester for the last 2 years. I take a{" "}
          <strong className=" text-white">"mobile-first"</strong> programming
          approach, realising that 58.67% of global website traffic (Statista,
          2023)". Take a look at my tech-stack below:
        </p>
        <Link href="/aboutme">
          <button className="btn btn-primary object-center m-4">
            My Skills and tech-stack
          </button>
        </Link>
      </div>
      <RiddlePage />
    </div>
  );
}
