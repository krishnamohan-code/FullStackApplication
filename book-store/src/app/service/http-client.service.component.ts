import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {Book} from "../model/Book";
@Injectable(
  {
    providedIn:"root"
  }
)
export class HttpClientService
{
    //  get:any;
      constructor(private httpClient : HttpClient)
      {}
      getUsers()
      {
        return this.httpClient.get<User[]>('http://localhost:8080/users/get');
      }
      addUser(newUser)
      {
        return this.httpClient.post<User>("http://localhost:8080/users/add",newUser);
      }
      deleteUser(id)
      {
        return this.httpClient.delete<User>("http://localhost:8080/users/"+id);
      }
      getBooks()
      {
        return this.httpClient.get<Book[]>("http://localhost:8080/books/get");
      }
      addUploadData(selectedFile)
      {
        return this.httpClient.post('/books/upload',selectedFile);
      }
      addBook(newBook:Book)
      {
        return this.httpClient.post<Book>("http://localhost:8080/books/add",newBook);
      }
      deletedBook(id)
      {
        return this.httpClient.delete<Book>("/books/"+id);
      }
      updateBook(updateBook:Book)
      {
        return this.httpClient.put<Book>("/books/update",updateBook);
      }
}
