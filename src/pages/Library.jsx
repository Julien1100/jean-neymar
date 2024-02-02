import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Book from "../components/Book";
import ErrorPage from "./ErrorPage";

const Books = [
  {
    imageURL:
      "https://jean-neymar.netlify.app/static/media/cover0.240e1126.jpg",
    title: "Après coup, Jean rigole",
  },
  {
    imageURL:
      "https://jean-neymar.netlify.app/static/media/cover1.9f367c22.jpg",
    title: "Des vacances aux Bahamas",
  },
  {
    imageURL:
      "https://jean-neymar.netlify.app/static/media/cover2.55ab26d3.jpg",
    title: "Il me reste encore un oeil",
  },
];

function Library() {
  const [books, setBooks] = useState(Books);

  return (
    <>
      <div className="div_oeuvres">
        <h1>Ma vie, mon oeuvre</h1>
        <div className="wrapper" key={books.title}>
          {books.map((book, index) => {
            return (
              <Link to={`/books/${index}`}>
                <Book
                  key={book.index}
                  imageURL={book.imageURL}
                  title={book.title}
                />
              </Link>
            );
          })}
        </div>
        <Routes>
          <Route path="/books/2" component={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default Library;
