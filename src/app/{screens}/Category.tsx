import Link from "next/link";
import styles from "./Category.module.css";

async function getCategoryList() {
    const bookUrl = "https://books-api.nomadcoders.workers.dev/lists"
    const bookList = await fetch(bookUrl)
    const json = await bookList.json();
    return json
}

export default async function CategoryList(){
    const bookCategory = await getCategoryList();
    
    return (
        <div className={styles.container}> 
            {/* { JSON.stringify(bookCategory)} */}
            { bookCategory?.results?.map((item, index)=>{ return (
                <Link href={`/list/${item.list_name_encoded}`} key={item.list_name_encoded}>
                <div className={styles.card} key={"card"+item.display_name+index}>
                    <div className={styles.content} key={"content"+item.display_name+index}>
                        { item.display_name }
                    </div>
                </div>
                </Link> )
            })}
        </div>
    );
}