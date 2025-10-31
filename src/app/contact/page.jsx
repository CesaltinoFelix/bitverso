import Button from "../components/button/Button"
import styles from "./page.module.css"
import Image from "next/image"
const Contact = ()=>{
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let's Get In Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src="/contact.png" className={styles.img} alt="Contact Image" fill={true}/>
                </div>
                <div className={styles.form}>
                    <input type="text" placeholder="Your Name" className={styles.input} />
                    <input type="email" placeholder="Your Email" className={styles.input} />
                    <textarea placeholder="Your Message" cols={30} rows={10} className={styles.textarea}></textarea>
                    <Button label="Send Message" url="#" />
                </div>

            </div>
        </div>
    )
}


export default Contact