import { Anek_Tamil } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavigationBar from "./navigationbar";

const anek_tamil = Anek_Tamil({ subsets: ["latin"] });

export const metadata = {
  title: "Max's portfolio",
  description: "My portfolio of work",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="synthwave" lang="en">
      <body className={anek_tamil.className}>
        <NavigationBar />
        {children}
        <footer>
          You reached the end of the page - scroll up to keep learning about me!
        </footer>
      </body>
    </html>
  );
}
