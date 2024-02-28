import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>My background</h1>
      <p>Insert info about my background here.</p>
      <h2>My key skills and experiences:</h2>
      <div className="technicalskills">
        <h3>Technical skills:</h3>
        <ul>
          <li>Third party API</li>
          <li>Next</li>
          <li>Third party API</li>
          <li>Third party API</li>
          <li>Third party API</li>
          <li>Third party API</li>
          <li>
            To see this in action, please see
            <Link href="/projects">My projects</Link>
          </li>
        </ul>
      </div>

      <div className="softskills">
        <h3>Soft skills:</h3>
        <ul>
          <li>Third party API</li>
          <li>Next</li>
          <li>Third party API</li>
          <li>Third party API</li>
          <li>Third party API</li>
          <li>Third party API</li>
          <li>Third party API</li>
        </ul>
      </div>
    </div>
  );
}
