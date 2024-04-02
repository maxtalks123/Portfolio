"use client";

import React from "react";
import Link from "next/link";

{
  /* <Link href="/">Home</Link>
          <Link href="/aboutme">About me</Link>
          <Link href="/projects">My Projects</Link>
          <Link href="/contactme">Contact me!</Link> */
}
export default function NavigationBar() {
  return (
    <div className="navbar bg-base-80">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/aboutme">About me</Link>
          </li>
          <li>
            <details>
              <summary>My work</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Memories of the Pandi</a>
                </li>
                <li>
                  <a>Grumble</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
