
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Footer(){
return<>
<div className="container-fluid bg-dark footer-container fixed-bottom">
<footer className={styles.footer}>© 2022 all rights reserved to
<span className={styles.logo}>
    <Image src="/logo.svg" alt="Vercel Logo" width={72} height={16} />
</span>
</footer>
</div>
</>
}

export default Footer