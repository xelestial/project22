import Link from 'next/link'
import styles from './header.module.css'

export default function Header () {
    return (
        <div className={styles.header}>
            
                <div className={styles.headerLink}>
                <Link href="/">
                Home 
            </Link>
            </div>
            
                <div className={styles.headerLink}>
                <Link href={"/about"}>about
                </Link></div>
            
        </div>
    )
}