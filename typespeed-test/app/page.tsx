import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typing Speed Test",
  description: "...",
};

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to the Typing Speed Test</h1>
        <Link href="/test">Start Test</Link>
      </main>
    </div>
  );
}
