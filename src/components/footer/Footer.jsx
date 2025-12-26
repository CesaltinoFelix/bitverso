import Image from "next/image";
import styles from "./page.module.css";
const Footer = ()=>{
    return (
        <div className={styles.container}>
            <div>© Cesaltino Félix. Todos os direitos reservados.</div>
            <div className={styles.social}>
                <Image src="/1.png" alt="Facebook" width={15} height={15} />
                <Image src="/2.png" alt="Facebook" width={15} height={15} />
                <Image src="/3.png" alt="Facebook" width={15} height={15} />
                <Image src="/4.png" alt="Facebook" width={15} height={15} />
            </div>
        </div>
    )
}

export default Footer