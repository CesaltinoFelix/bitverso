import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <Image
            className={styles.img}
            src="/illustration.png"
            alt="Illustrations"
            layout="fill"
            objectFit="cover"
          />

          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <Image
            className={styles.img}
            src="/websites.jpg"
            alt="Websites"
            layout="fill"
            objectFit="cover"
          />

          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <Image
            className={styles.img}
            src="/apps.jpg"
            alt="Applications"
            layout="fill"
            objectFit="cover"
          />
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
