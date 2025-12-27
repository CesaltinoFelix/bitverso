import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = async () => {
  async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await res.json();
    return data;
  }

  const posts = await fetchPosts();

  return (
    <div className={styles.mainContainer}>
      {posts.map((post) => (
        <Link href={`/blog/${post.id}`} className={styles.container} key={post.id}>
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
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
