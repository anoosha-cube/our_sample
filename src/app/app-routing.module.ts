import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    { path: '', redirectTo: 'contact-form', pathMatch: 'full' },
    { path: 'contact-form', component: ContactFormComponent },
  { path: 'register-form', component: RegisterFormComponent },
  { path: 'view-page', component:ViewComponent },
  { path: 'list-page', component:ListComponent },
  { path: 'create-page', component:CreateComponent }

]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }