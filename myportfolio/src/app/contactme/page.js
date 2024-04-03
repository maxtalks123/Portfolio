import Link from "next/link";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="bg-green-900 mx-auto hero-content text-centerflex-col lg:flex-row max-w-xl rounded-lg shadow-2xl max-h-l">
      <h1>Want to contact me?</h1>
      <div>
        <Link href="https://www.linkedin.com/in/max-emerson-69a7bbb2/">
          <LinkedInLogoIcon />
          Connect with me
        </Link>
      </div>
      <div>
        <Link href="https://github.com/maxtalks123">
          <GitHubLogoIcon />
          My code
        </Link>
      </div>
    </div>
  );
}
