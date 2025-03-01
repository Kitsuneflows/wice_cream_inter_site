import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/"></Link></li>
        <li><Link href="/Projet"></Link></li>
        <li><Link href="/A propos"></Link></li>
      </ul>
    </nav>
  );
}
