import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { RequestInterceptor } from './request.interceptor';
import { CapitalizeFirstLetterPipe } from './capitalize-first-letter.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VetrinaComponent } from './components/vetrina/vetrina.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { ProdottiClienteComponent } from './components/cliente/prodotti-cliente/prodotti-cliente.component';
import { ProfiloClienteComponent } from './components/cliente/profilo-cliente/profilo-cliente.component';
import { HomeDipendenteComponent } from './components/dipendente/home-dipendente/home-dipendente.component';
import { ProdottiDipendenteComponent } from './components/dipendente/prodotti-dipendente/prodotti-dipendente.component';
import { ProfiloDipendenteComponent } from './components/dipendente/profilo-dipendente/profilo-dipendente.component';
import { DipendentiAdminComponent } from './components/admin/dipendenti-admin/dipendenti-admin.component';
import { ProdottiAdminComponent } from './components/admin/prodotti-admin/prodotti-admin.component';
import { RegistroAdminComponent } from './components/admin/registro-admin/registro-admin.component';
import { InventarioDipendenteComponent } from './components/dipendente/inventario-dipendente/inventario-dipendente.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    NotFoundComponent,
    VetrinaComponent,
    CapitalizeFirstLetterPipe,
    ToolbarComponent,
    HomeAdminComponent,
    HomeClienteComponent,
    ProdottiClienteComponent,
    ProfiloClienteComponent,
    HomeDipendenteComponent,
    ProdottiDipendenteComponent,
    ProfiloDipendenteComponent,
    DipendentiAdminComponent,
    ProdottiAdminComponent,
    RegistroAdminComponent,
    InventarioDipendenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
