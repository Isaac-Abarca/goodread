import "./catalogebooks.css";
import data from "../../data/books.js";

function CatalogeBooks() {
  return (
    <main className="main-content">
      <section className="filters">
        <h2>Filters</h2>
      </section>
      <section className="books">
        {data.library.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.book.cover} alt={book.book.title} />
            <h2>{book.book.title}</h2>
            <p>Author: {book.book.author.name}</p>
            <p>Genre: {book.book.genre}</p>
            <p>Year: {book.book.year}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default CatalogeBooks;
