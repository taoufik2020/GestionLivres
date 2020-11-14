import { CommandeService } from './../commande.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private http:CommandeService , private fb: FormBuilder) { }
   CommandeForm: FormGroup
   x = false;
   Commandes;
   update = false;
   id ;
  ngOnInit() {
    
    this.findAll();
    this.CommandeForm = this.fb.group({
      
      Date_commande:[],
      id_client:[],
      etat:[],
      montant:[],
      
     })
  }
 
  findAll(){
    this.http.getCommandes().subscribe((data)=> {
      
   this.Commandes = data
   console.log("object",data);

    })
  }
  delet(id){
   console.log("object");
    this.http.Delete(id).subscribe((data)=> console.log("data",data))
    this.findAll()
  }
  persiste(){
   
    console.log(this.CommandeForm.value);
   this.http.persiste(this.CommandeForm.value).subscribe(data => console.log(data))
   this.CommandeForm.reset()
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
    console.log("object",this.CommandeForm.value);
    this.http.updade(this.id,this.CommandeForm.value).subscribe();
      
    this.findAll()
    this.CommandeForm.reset()
    
    this.update = false
  }

}
