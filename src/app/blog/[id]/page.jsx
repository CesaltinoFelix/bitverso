import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }) {
    const {id} = await params;
  const post = await getData(id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
    const {id} = await params;
  const data = await getData(id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc ? data.desc : "No description available."}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img ? data.img : "https://images.pexels.com/photos/28839480/pexels-photo-28839480.jpeg"}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username ? data.username : "Unknown Author"}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img ? data.img : "https://images.pexels.com/photos/28839480/pexels-photo-28839480.jpeg"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {data.content ? data.content : "No content available."}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;