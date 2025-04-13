import bookstyle from "../../../styles/book-info.module.css";

export default async function Page({
  params,
}: {
  params: { listNameEncoded: string };
}) {
  const res = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${params.listNameEncoded}`
  );
  const data = await res.json();
  const books = data.results?.books || [];

  return (
    <div>
      <h1 className={bookstyle.title}>{params.listNameEncoded}</h1>
      <div className={bookstyle.gridContainer}>
        {books.map((book: any) => (
          <div key={book.primary_isbn13} className={bookstyle.bookCard}>
            <img
              className={bookstyle.poster}
              src={book.book_image}
              alt="Book Cover"
            />
            <p className={bookstyle.bookTitle}>{book.title}</p>
            <p className={bookstyle.bookAuthor}>{book.author}</p>
            <a
              href={book.amazon_product_url}
              target="_blank"
              className={bookstyle.buyButton}
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
