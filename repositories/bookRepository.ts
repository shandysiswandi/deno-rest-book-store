import Client from "../config/database.ts";
import Book from "../models/Book.ts";

class BookRepository {
  getAllBooks = async () => {
    const result = await Client.query("SELECT * FROM books");
    const books = new Array<Book>();

    result.rows.map((book) => {
      var temp: any = {};
      result.rowDescription.columns.map((item, index) => {
        temp[item.name] = book[index];
      });
      books.push(temp);
    });

    return books;
  };

  getBookById = async (id: number) => {
    const result = await Client.query({
      text: "SELECT * FROM books WHERE id=$1",
      args: [id],
    });

    var book: any = {};
    result.rows.map((items) => {
      result.rowDescription.columns.map((item, index) => {
        book[item.name] = items[index];
      });
    });

    return book;
  };

  createBook = async (book: Book) => {
    return await Client.query({
      text: "INSERT INTO books (title, author, price) VALUES ($1, $2, $3)",
      args: [book.title, book.author, book.price],
    });
  };

  updateBook = async (id: number, book: Book) => {
    return await Client.query({
      text: "UPDATE books SET title=$1, author=$2, price=$3 WHERE id=$4",
      args: [book.title, book.author, book.price, id],
    });
  };

  deleteBook = async (id: number) => {
    return await Client.query({
      text: "DELETE FROM books WHERE id=$1",
      args: [id],
    });
  };
}

export default new BookRepository();
