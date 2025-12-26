import React from "react";
import styles from "./darkModeToggle.module.css"

const darkModeToggle = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>☀️</div>

        </div>
    )
}

export default darkModeToggle