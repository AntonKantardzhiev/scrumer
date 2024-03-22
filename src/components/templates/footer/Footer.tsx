import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>© 2023 Copyright. All rights reserved.</div>
      <div className={styles.contact}>
        <Image
          src="/unknown.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="image contact"
        />
      </div>
    </div>
  );
}
