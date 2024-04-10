import Image from "next/image";
import Link from "next/link";

interface ProjectInfo {
  projectname: string;
  projectimage: string;
  projectalt: string;
  projectdescr: string;
  githublink: string;
  livelink: string;
}

export default function Projects(projectinfo: ProjectInfo) {
  return (
    <div className="rounded-lg border-2 border-white text-center p-4 bg-secondary max-w-72">
      <h1 className="text-center">{`${projectinfo.projectname}`}</h1>
      <Image
        className="max-w-sm items-center m-2"
        src={`${projectinfo.projectimage}`}
        alt={`${projectinfo.projectalt}`}
        width={200}
        height={400}
      />
      <p>{`${projectinfo.projectdescr}`}</p>
      <Link href={`${projectinfo.githublink}`}>
        <button className="btn btn-primary object-center m-1">
          Visit on Github
        </button>
      </Link>
      <Link href={`${projectinfo.livelink}`}>
        <button className="btn btn-primary object-center m-1">Live site</button>
      </Link>
    </div>
  );
}
