"use client";
import styles from "./page.module.css";
import Link from "next/link"
import DarkModeToggle from "../darkModeToggle/DarkModeToggle"
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = ()=>{
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
            BitVerso
            </Link>
            <div className={styles.links}>
              <DarkModeToggle />
                {links.map((link)=>{
                   return <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                })}
                <button
                className={styles.logout}
                onClick={()=>{
                    console.log("Logout clicked");
                }}>
                  Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar