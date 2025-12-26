import react from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ label, url }) => {
    return (
        <Link href={url}>
           <button className={styles.container}>{label}</button>
        </Link>
    );
}

export default Button;