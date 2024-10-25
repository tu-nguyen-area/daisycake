import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2">
      <div>
        <header>
          <div className="flex flex-row justify-between text-white">
            <p>Cake by Daisy</p>
            <p>cakestore@email.com</p>
            <Link href="/signin">Sign in</Link>
          </div>
        </header>
      </div>
    </div>
  );
}
