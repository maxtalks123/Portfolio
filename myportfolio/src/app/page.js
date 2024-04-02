import Link from "next/link";
export default function Home() {
  return (
    <div className="hero min-h-screen min-w-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to my portfolio site!</h1>
          <p className="py-6">
            Here you will learn what a great asset I can be at your company.
            Parts of the site are still under development as I continue to learn
            and develop my skills and knowledge.
          </p>
          <Link href="/contactme">
            <button className="btn btn-primary">Contact me!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
