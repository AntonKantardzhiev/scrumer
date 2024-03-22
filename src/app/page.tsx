import styles from './page.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
    <h1 className={styles.title}>The beetter way for developing your projects!</h1>
    <p className={styles.desription}>Free oof cahrge , open-source selfhosted application for easier managment of projects.
      Appling the practices of agile sistem and the event driven beheivier, this app is made to optimeze you individual or personal workflow.
    </p>
    <button className={styles.button}>Learn more</button>
    </div>
    <div className={styles.item}>
    <Image width={500} height={500} className={styles.img} src="/unknown.png" alt="Hero image" />      
    </div>
    </div>
    );
};
export default Home;
