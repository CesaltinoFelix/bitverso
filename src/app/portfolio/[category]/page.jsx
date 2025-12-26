import styles from "./page.module.css";
import Button from "./../../components/button/Button";
import Image from "next/image";
const Category = async ({ params }) => {
  const { category } = await params;
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1  className={styles.title}>Cesaltino Felix</h1>
          <p  className={styles.desc}>Desc</p>
          <Button label="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/28839480/pexels-photo-28839480.jpeg" alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1  className={styles.title}>Cesaltino Felix</h1>
          <p  className={styles.desc}>Desc</p>
          <Button label="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/28839480/pexels-photo-28839480.jpeg" alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1  className={styles.title}>Cesaltino Felix</h1>
          <p  className={styles.desc}>Desc</p>
          <Button label="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/28839480/pexels-photo-28839480.jpeg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Category;
