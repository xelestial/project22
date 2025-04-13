import styles from './about.module.css'

export default async function About(){
    return (
    <div className={styles.about}>
        <div className={styles.aboutContent}>
            <h2> Hello! This is About page! :) </h2>
            <br/>
            <h3> Plz click Home button... to go back </h3>
            

        </div>
    </div>)
}