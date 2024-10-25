import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2">
      <div>
        <header>
          <div className="flex flex-row justify-between text-white">
            <Link href="https://www.facebook.com/people/Cake-by-Daisy/100091791484158/">FB: Cake by Daisy</Link>
            <Link href="https://www.facebook.com/tranghy7199">FB: Homemade Baker</Link>
            <Link href="/">Sign in</Link>
          </div>
        </header>
      </div>
    </div>
  );
}
