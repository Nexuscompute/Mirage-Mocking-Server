import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([{}]);

  useEffect(() => {
    setInterval(() => {
      fetch("/api/books")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBooks(data);
        });
    }, 2000);
  }, []);

  const addNewBookToCollection = () => {
    const title = prompt("Enter the book title");
    const Author = prompt("Enter the Author bok");

    if (!title || !Author) {
      return false;
    }

    console.log(title, Author);

    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ title, Author }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  if (!books.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>Avasilable Books</h1>
      <div>
        <h4>Title - : - Author</h4>
      </div>
      <div>
        {books.map((Obj, index) => {
          return (
            <div key={index}>
              <p>
                {Obj.title} - : - {Obj.Author}
              </p>
            </div>
          );
        })}
      </div>

      <button onClick={addNewBookToCollection}>Add New Book</button>
    </div>
  );
}

export default App;
