import React, { use, useContext } from "react";
import styles from "./darkModeToggle.module.css"
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = ()=>{
    const {mode, toggleMode} = useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggleMode}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>☀️</div>
            <div className={styles.ball} />
        </div>
    )
}

export default DarkModeToggle