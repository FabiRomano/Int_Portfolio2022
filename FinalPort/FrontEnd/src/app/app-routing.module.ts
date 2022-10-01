import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditarHysComponent } from './components/hy-s/editar-hys/editar-hys.component';
import { HySComponent } from './components/hy-s/hy-s.component';
import { NuevaHysComponent } from './components/hy-s/nueva-hys/nueva-hys.component';
import { LoginComponent } from './components/login/login.component';
import { EditarProyectosComponent } from './components/proyecto/editar-proyectos/editar-proyectos.component';
import { NuevosProyectosComponent } from './components/proyecto/nuevos-proyectos/nuevos-proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'educacion', component: EducacionComponent },
  {path: 'editarEducacion/:idEdu', component: EditarEducacionComponent },
  {path: 'nuevaEducacion', component: NuevaEducacionComponent},
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'nuevaExperiencia', component: NuevaExperienciaComponent },
  { path: 'editarExperiencia/:idExp', component: EditarExperienciaComponent },
  { path: 'hys ' , component: HySComponent },
  { path: 'editarHys/:idSki', component: EditarHysComponent},
  { path: 'nuevaHys', component: NuevaHysComponent},
  { path: 'proyecto', component: ProyectoComponent},
  { path: 'nuevosProyectos', component: NuevosProyectosComponent},
  { path: 'editarProyectos/:idProyec', component: EditarProyectosComponent},
  { path: 'acercade', component: AcercaDeComponent },
  { path: 'editarAcercaDe/:id', component:EditarAcercaDeComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
