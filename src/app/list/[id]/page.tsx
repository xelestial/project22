import Link from "next/link";
import styles from './BookList.module.css'

import { BackIcon } from "./Back";
import Overlay from "./Overlay";

async function getBookList(id){
    const bookDetaillUrl = `https://books-api.nomadcoders.workers.dev/list?name=${id}`;
    const bookDetail= await fetch(bookDetaillUrl)
    const json = await bookDetail.json();
    return json
}

interface Props {
    params: {
        id: string;
    }
}

export default async function BookList( {params}:Props){
    const { id } = params;
    const bookList = await getBookList(id);
    
    return (
        <> 
        <div className={styles.iconContainer}>
                <BackIcon />
        </div>
        <div className={styles.title}>
            { bookList.results.list_name }
        </div>
        <div className={styles.container}>
            {/* { JSON.stringify(bookList)} */}
            {/* { JSON.stringify(bookDetail)} */}
            { bookList?.results?.books.map((item, index)=>{ return (
                
                <Overlay key={"over"+item.title+index}>
                    <div className={styles.card} key={"card"+item.title+index}>
                        <img className={styles.image} src={item.book_image}/>
                        <div className={styles.buttonGroup}>
                        { item.buy_links?.map((ext, idx)=>{ 
                            return (
                            <a
                                key={ext.name + idx}
                                href={ext.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.button}
                            >
                            {ext.name}
                          </a>)
                        })}

                        </div>
                        <div className={styles.content} key={"content"+item.content+index}>
                            <ul key={"ul"+item.title+index} className={styles.ul}>
                                <h3 className={styles.title} key={"h3"+item?.title+index}> { item.title } </h3>
                                <li className={styles.description} key={"li1"+item?.author+index}>
                                    <h4 className={styles.bookMeta} key={"h4"+item?.title+index}> By { item?.author } · { item?.publisher } </h4>
                                </li>
                                <li className={styles.description} key={"li3"+item?.description+index}>
                                    { item?.description}
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </Overlay> )
            })}
        </div>
        </>
    );
}