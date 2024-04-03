import Link from "next/link";
export default function Page() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Here are a list of my completed projects
            </h1>
            <p className="py-6">
              Final project - Grumble (Tinder for Restaurants)
            </p>
            <Link href="https://final-week-project.vercel.app/">
              See the final product here
            </Link>
            <Link href="https://github.com/maxtalks123?tab=repositories">
              <button className="btn btn-primary">My Github</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
