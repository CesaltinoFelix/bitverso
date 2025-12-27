import styles from "./page.module.css";
import Button from "./../../../components/button/Button";
import Image from "next/image";
import { items } from "./data";
const Category = async ({ params }) => {
  const { category } = await params;
  const data = items[category];
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button label="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
