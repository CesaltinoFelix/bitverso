import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/28839480/pexels-photo-28839480.jpeg"
            alt=""
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/28839480/pexels-photo-28839480.jpeg"
            alt=""
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/28839480/pexels-photo-28839480.jpeg"
            alt=""
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/28839480/pexels-photo-28839480.jpeg"
            alt=""
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Description</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
