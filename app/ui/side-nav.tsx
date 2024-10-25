import Link from 'next/link';

const links = [
  { name: 'Home', href: '/home' },
  { name: 'Cake', href: '/cake' },
  { name: 'Order', href: '/' },
  { name: 'Contact', href: '/' },
  { name: 'Support', href: '/' },
  { name: 'About', href: '/' },
];

export default function SideNav() {
  return (
    <>
      <div className="flex justify-center">
      {links.map((link) => {
        return (
          <Link className="m-6 w-32 h-6 flex justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white animate-changebutton" key={link.name} href={link.href}>
            {link.name}
          </Link>
        );
      })}
      </div>
    </>
  );
}
