import Link from "next/link";
import "/public/maxpicture.png";
import RiddlePage from "./components/RiddlePage";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center underline">
        Welcome to my portfolio site!
      </h1>
      <div className="mx-auto hero-content text-centerflex-col lg:flex-row">
        <img src="maxpicture.png" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="max-w-md">
          <p className="text-2xl py-6">
            Here you will learn what a great asset I can be at your company.
            Parts of the site are still under development as I continue to learn
            and develop my skills and knowledge.
          </p>
          <Link href="/contactme">
            <button className="btn btn-primary">Contact me!</button>
          </Link>
        </div>
      </div>
      <RiddlePage />
    </div>
  );
}
