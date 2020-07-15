import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '@user/user-list/user-list.component';
import { UserCreateComponent } from '@user/user-create/user-create.component';
import { ErrorComponent } from '@shared/error/error.component';


const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user', component: UserCreateComponent },
  { path: 'user/:id', component: UserCreateComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
