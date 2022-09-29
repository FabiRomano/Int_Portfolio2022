import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'educacion', component: EducacionComponent },
  {path: 'editarEducacion/:idEdu', component: EditarEducacionComponent },
  {path: 'nuevaEducacion', component: NuevaEducacionComponent},
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'nuevaExperiencia', component: NuevaExperienciaComponent },
  { path: 'editarExperiencia/:idExp', component: EditarExperienciaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
