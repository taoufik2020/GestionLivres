import { Book } from './models/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const Link = "http://localhost:8700/"

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http:HttpClient) { }
   
  getBooks(): Observable<any>{

    return this.http.get<Book[]>(Link+"books");
  }
  Delete(id){

    return this.http.delete(Link +"books/" + id)
  }
  persiste(book){
    return this.http.post("http://localhost:8700/books",book)
  }
   updade(id,objet){
     return this.http.put(Link +"books/"+id,objet)
   }
}
