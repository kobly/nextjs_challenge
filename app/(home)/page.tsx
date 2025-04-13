import styles from "../../styles/home.module.css";
import Link from "next/link";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getBook() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const Books = await getBook();
  const lists = Books.results;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>BOOKSTORE</h1>
        <h2>The New York Times Best Seller Exploere</h2>
      </div>
      <div className={styles.main}></div>
      <div className={styles.container}>
        {lists.map((list) => (
          <Link href={`/list/${list.list_name_encoded}`}>
            <div key={list.list_name_encoded} className={styles.item}>
              {list.display_name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
