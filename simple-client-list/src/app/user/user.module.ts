import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '@user/user-list/user-list.component';
import { UserCreateComponent } from '@user/user-create/user-create.component';
import { UserService } from '@user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UserListComponent, UserCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    UserService,
    DatePipe
  ]
})
export class UserModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
