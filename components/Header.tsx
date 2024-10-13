import Link from "next/link";
export default function Header() {
  return(
    <div>
      <ul className="flex justify-center flex gap-40 bg-blue-300">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/country">Country</Link></li>
       </ul>
  </div>
  );
}