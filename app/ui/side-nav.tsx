import Link from 'next/link';

const links = [
  { name: 'Home', href: '/home' },
  { name: 'Cake', href: '/cake' },
];

export default function SideNav() {
  return (
    <>
      <div className="flex justify-center">
      {links.map((link) => {
        return (
          <Link className="m-2 md:m-6 w-28 md:w-32 md:h-6 flex justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white animate-changebutton" key={link.name} href={link.href}>
            {link.name}
          </Link>
        );
      })}
      </div>
    </>
  );
}
