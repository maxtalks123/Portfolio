import { Anek_Tamil } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const anek_tamil = Anek_Tamil({ subsets: ["latin"] });

export const metadata = {
  title: "Max's portfolio",
  description: "My portfolio of work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anek_tamil.className}>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/aboutme">About me</Link>
          <Link href="/projects">My Projects</Link>
          <Link href="/contactme">Contact me!</Link>
        </nav>
        {children}
        <footer>
          You reached the end of the page - scroll up to keep learning about me!
        </footer>
      </body>
    </html>
  );
}
