'use client';

import Link from 'next/link';
import React from 'react';

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

const Sidebar = () => {
  return (
    <div>
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          {link.title}
        </Link>
      ))}
      <button onClick={() => console.log('logout')}>Logout</button>
    </div>
  );
};
export default Sidebar;
