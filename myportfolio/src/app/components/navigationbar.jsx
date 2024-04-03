"use client";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="navbar bg-base-80 space-x-40 relative">
      <div className="flex">
        <Link href="/" className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>
      <div className="flex-start">
        <Link href="https://www.linkedin.com/in/max-emerson-69a7bbb2/">
          <LinkedInLogoIcon />
          Connect with me
        </Link>
      </div>
      <div className="flex-start">
        <Link href="https://github.com/maxtalks123">
          <GitHubLogoIcon />
          My code
        </Link>
      </div>
      <div className="text-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/aboutme">About me</Link>
          </li>
          <li>
            <details>
              <summary>My work</summary>
              <ul className="bg-base-100 rounded-t-none">
                <li>
                  <Link href="https://final-week-project.vercel.app/">
                    Grumble
                  </Link>
                </li>
                <li>
                  <Link href="https://memoriesofthepandiclient.onrender.com/">
                    Memories of the pandi
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
