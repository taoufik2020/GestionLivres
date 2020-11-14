import { Book } from './../models/book';
import { LivreService } from './../livre.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  constructor(private http:LivreService , private fb: FormBuilder) { }
   Books: Book[] = [];
   BookForm: FormGroup
   x = false;
   update = false;
   id ;
  ngOnInit() {
    
    this.findAll();
    this.BookForm = this.fb.group({
      
      title:[],
      author:[],
      price:[],
      publishingDate:[],
      available:[],
      quantity:[],
     })
  }
 
  findAll(){
    this.http.getBooks().subscribe((data)=> {
      
   this.Books = data
   console.log("object",data);

    })
  }
  delet(id){
   console.log("object");
    this.http.Delete(id).subscribe((data)=> console.log("data",data))
    this.findAll()
  }
  persiste(){
   
    console.log(this.BookForm.value);
   this.http.persiste(this.BookForm.value).subscribe(data => console.log(data))
   this.BookForm.reset()
   this.x = false
   this.findAll()
  }
  bool(){
    this.x = true
  }
  changeUpdate(){
    this.update = true
    
  }
  getId(id){
    this.id = id
    console.log("id",this.id)

  }
  Update(){
    console.log("object",this.BookForm.value);
    this.http.updade(this.id,this.BookForm.value).subscribe();
      
    this.findAll()
    this.BookForm.reset()
    
    this.update = false
  }
}
