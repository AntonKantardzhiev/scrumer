'use client';
import Link from 'next/link';
import Mode from "../../mode/Mode";
import styles from './navbar.module.css';


const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'Chat',
    url: '/chat',
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}></Link>
      <div className={styles.links}>
        <Mode />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => console.log('logout')}>Logout</button>
      </div>
    </div>
  );
};
export default Navbar;
