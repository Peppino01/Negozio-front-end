import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VetrinaComponent } from './components/vetrina/vetrina.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { environment } from 'src/environments/environment';
import { DipendentiComponent } from './components/admin/dipendenti/dipendenti.component';
import { ProdottiComponent } from './components/admin/prodotti/prodotti.component';
import { RegistroComponent } from './components/admin/registro/registro.component';

const routes: Routes = [

  // pagine pubbliche
  { path: '', pathMatch: 'full', redirectTo: environment.pagesUrl.login },
  { path: environment.pagesUrl.login, component: LoginComponent },
  { path: environment.pagesUrl.signin, component: SigninComponent },
  { path: environment.pagesUrl.vetrina, component: VetrinaComponent },

  // amministratore
  { path: environment.pagesUrl.admin, component: HomeAdminComponent },
  { path: environment.pagesUrl.gestione_dipendenti, component: DipendentiComponent },
  { path: environment.pagesUrl.gestione_prodotti, component: ProdottiComponent },
  { path: environment.pagesUrl.registro, component: RegistroComponent },
  
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
