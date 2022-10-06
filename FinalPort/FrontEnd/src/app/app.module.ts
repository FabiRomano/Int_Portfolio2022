import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { HySComponent } from './components/hy-s/hy-s.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarHysComponent } from './components/hy-s/editar-hys/editar-hys.component';
import { NuevaHysComponent } from './components/hy-s/nueva-hys/nueva-hys.component';
import { EditarProyectosComponent } from './components/proyecto/editar-proyectos/editar-proyectos.component';
import { NuevosProyectosComponent } from './components/proyecto/nuevos-proyectos/nuevos-proyectos.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectoComponent,
    HySComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EditarEducacionComponent,
    NuevaEducacionComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    EditarHysComponent,
    NuevaHysComponent,
    EditarProyectosComponent,
    NuevosProyectosComponent,
    EditarAcercaDeComponent,
    ContactoComponent,
    NavBarComponent,
    
   
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
