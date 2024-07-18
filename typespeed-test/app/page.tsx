import Link from "next/link";
import { Metadata } from "next";
import "../components/Center.css";
export const metadata: Metadata = {
  title: "Typing Speed Test",
  description: "...",
};

export default function Home() {
  return (
    <div>
      <main
        className="centered-content"
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <h1>Welcome to the Typing Speed Test</h1>
        <Link href="/test">Start Test</Link>
      </main>
    </div>
  );
}
