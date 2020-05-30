import Client from "../config/database.ts";
import Book from "../models/bookModel.ts";

class BookRepository {
  async all() {
    return Client.query("SELECT * FROM books");
  }

  async find(id: number) {
    return Client.query({
      text: "SELECT * FROM books WHERE id=$1",
      args: [id],
    });
  }

  async create(book: Book) {
    return Client.query({
      text: "INSERT INTO books (title, author, price) VALUES ($1, $2, $3)",
      args: [book.title, book.author, book.price],
    });
  }

  async update(id: number, book: Book) {
    return Client.query({
      text: "UPDATE books SET title=$1, author=$2, price=$3 WHERE id=$4",
      args: [book.title, book.author, book.price, id],
    });
  }

  async delete(id: number) {
    return Client.query({
      text: "DELETE FROM books WHERE id=$1",
      args: [id],
    });
  }
}
export default new BookRepository();
