import { Server } from "miragejs";
import books from "./books.json";

export function MirageServer() {
  let server = new Server({
    routes() {
      this.namespace = "api";

      // for get method
      this.get("/books", () => {
        return books;
      });

      // for post method
      this.post("/add", (schema, request) => {
        console.log(request);
        const newBook = JSON.parse(request.requestBody);
        books.push(newBook);
      });
    },
  });
  return server;
}
