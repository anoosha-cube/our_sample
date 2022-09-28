import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
    { path: '', redirectTo: 'contact-form', pathMatch: 'full' },
    { path: 'contact-form', component: ContactFormComponent },
  { path: 'register-form', component: RegisterFormComponent },
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }