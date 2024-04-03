import Link from "next/link";
import TechSkillsTable from "../components/Techskillstable";
import SoftSkillsTable from "../components/Softskillstable";
export default function Page() {
  return (
    <div>
      <div className="mx-auto max-w-xl text-center m-4">
        <h1 className="text-center text-lg text-white">Language Skills</h1>
        <TechSkillsTable />
      </div>
      <div className="mx-auto max-w-xl relative text-center m-4">
        <h1 className="text-center text-lg text-white">Soft Skills</h1>
        <SoftSkillsTable />
      </div>
      {/* To see this in action, please see
      <Link href="/projects">My projects</Link> */}
    </div>
  );
}
