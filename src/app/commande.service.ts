import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const Link = "http://localhost:8181/commandes"

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
   
  getCommandes() {

    return this.http.get(Link);

  }
  
  Delete(id){

    return this.http.delete(Link + id)
  }
  persiste(commande){

    return this.http.post(Link,commande)

  }
   updade(id,objet){

     return this.http.put(Link + id,objet)

   }
}
