import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { ClientComponent } from './client/client.component';
import { CategoryComponent } from './category/category.component';
import { CommandeComponent } from './commande/commande.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  { path: '', component: LivreComponent },
  { path: 'commandes', component: CommandeComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    ClientComponent,
    CategoryComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
