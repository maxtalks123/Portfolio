"use client";
export default function TechSkillsTable() {
  return (
    <div className="overflow-x-auto bg-secondary top-3">
      <table className="table">
        <thead>
          <tr className="hover">
            <th></th>
            <th className="text-lg">Language</th>
            {/* <th>Proficiency</th>
        <th>Projects used in</th> */}
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <th>1</th>
            <td>Next.js</td>
            {/* <td>Good</td>
        <td>Blue</td> */}
          </tr>

          <tr className="hover">
            <th>2</th>
            <td>Javascript</td>
            {/* <td>Desktop Support Technician</td>
        <td>Purple</td> */}
          </tr>

          <tr className="hover">
            <th>3</th>
            <td>Typescript</td>
            {/* <td>Tax Accountant</td>
        <td>Red</td> */}
          </tr>
          <tr className="hover">
            <th>4</th>
            <td>VS Code</td>
            {/* <td>Tax Accountant</td>
        <td>Red</td> */}
          </tr>
          <tr className="hover">
            <th>5</th>
            <td>Github</td>
            {/* <td>Tax Accountant</td>
        <td>Red</td> */}
          </tr>
          <tr className="hover">
            <th>6</th>
            <td>React</td>
            {/* <td>Tax Accountant</td>
        <td>Red</td> */}
          </tr>
          <tr className="hover">
            <th>7</th>
            <td>HTML</td>
            {/* <td>Tax Accountant</td>
        <td>Red</td> */}
          </tr>
          <tr className="hover">
            <th>8</th>
            <td>CSS</td>
            {/* <td>Tax Accountant</td>
        <td>Red</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
