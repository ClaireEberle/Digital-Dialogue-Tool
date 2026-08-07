import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/NewDialogue">
        New Dialogue
      </Link>
      <Link href="/HowTo">
        How to
      </Link>
      <Link href="/Saved">
        Saved
      </Link>
    </div>
  );
}
