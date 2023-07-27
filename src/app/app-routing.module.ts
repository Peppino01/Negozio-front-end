import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VetrinaComponent } from './components/vetrina/vetrina.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { DipendentiAdminComponent } from './components/admin/dipendenti-admin/dipendenti-admin.component';
import { ProdottiAdminComponent } from './components/admin/prodotti-admin/prodotti-admin.component';
import { RegistroAdminComponent } from './components/admin/registro-admin/registro-admin.component';
import { HomeDipendenteComponent } from './components/dipendente/home-dipendente/home-dipendente.component';
import { ProdottiDipendenteComponent } from './components/dipendente/prodotti-dipendente/prodotti-dipendente.component';
import { ProfiloDipendenteComponent } from './components/dipendente/profilo-dipendente/profilo-dipendente.component';
import { ProdottiClienteComponent } from './components/cliente/prodotti-cliente/prodotti-cliente.component';
import { ProfiloClienteComponent } from './components/cliente/profilo-cliente/profilo-cliente.component';
import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { InventarioDipendenteComponent } from './components/dipendente/inventario-dipendente/inventario-dipendente.component';
import { CarrelloComponent } from './components/cliente/carrello/carrello.component';

const routes: Routes = [

  // pagine pubbliche
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'vetrina', component: VetrinaComponent },

  // proprietario
  { path: 'admin/home', component: HomeAdminComponent },
  { path: 'admin/dipendenti', component: DipendentiAdminComponent },
  { path: 'admin/prodotti', component: ProdottiAdminComponent },
  { path: 'admin/registro', component: RegistroAdminComponent },

  // dipendenti
  { path: 'dipendente/home', component: HomeDipendenteComponent },
  { path: 'dipendente/prodotti', component: ProdottiDipendenteComponent },
  { path: 'dipendente/inventario', component: InventarioDipendenteComponent },
  { path: 'dipendente/profilo', component: ProfiloDipendenteComponent },

  // clienti
  { path: 'cliente/home', component: HomeClienteComponent },
  { path: 'cliente/prodotti', component: ProdottiClienteComponent },
  { path: 'cliente/profilo', component: ProfiloClienteComponent },
  { path: 'cliente/carrello', component: CarrelloComponent },
  
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
