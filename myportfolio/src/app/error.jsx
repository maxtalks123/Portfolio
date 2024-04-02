"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h1>Oh no! Something went wrong!</h1>
        <p>{error.message}</p>
        <Link href="/">
          <button onClick={() => reset()}>Back to homepage</button>
        </Link>
      </body>
    </html>
  );
}
