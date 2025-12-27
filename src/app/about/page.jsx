import Button from "../../components/button/Button"
import styles from "./page.module.css"
import Image from "next/image";
const About = ()=>{
    return (
        <div className={styles.container}>
             <div className={styles.imgContainer}>
                <Image src="/about.png" className={styles.img} alt="About Image" fill={true}/>
             <div className={styles.imgText}>
                <h1 className={styles.title}>Digital Storytellers</h1>
                <h2 className={styles.desc}>Handcrafting award winning digital experiences</h2>
             </div>

            </div>

             <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec vel mauris quam. Sed vel lacus id magna consequat 
                        tincidunt. Nullam euismod, nisi vel consectetur interdum, 
                        nisl nisi aliquet nunc, eget aliquam nisl nunc euismod nunc.
                    </p>
                     <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec vel mauris quam. Sed vel lacus id magna consequat 
                        tincidunt. Nullam euismod, nisi vel consectetur interdum, 
                        nisl nisi aliquet nunc, eget aliquam nisl nunc euismod nunc.
                    </p>
                </div>

                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec vel mauris quam. Sed vel lacus id magna consequat 
                        tincidunt. Nullam euismod, nisi vel consectetur interdum, 
                        nisl nisi aliquet nunc, eget aliquam nisl nunc euismod nunc.
                        <br /><br />
                        - Creative Illustrations
                        <br />
                        - Dynamic Websites
                        <br />
                        - Fast and Handy Mobile Apps
                        <br />
                        - Social Media Management
                    </p>
                    <Button label="Contact" url="/contact"/>
                </div>
            </div>
        </div>
    )
}


export default About