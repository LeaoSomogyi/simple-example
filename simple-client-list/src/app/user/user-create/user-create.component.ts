import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { User } from '@user/user.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  public title: string;
  public user: User;
  public formRegister: FormGroup;
  public buttonText: string;
  public isLoaded: boolean;
  public message: string;
  public cssClass: string;
  private isEditing: boolean;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private router: Router) {
    this.isLoaded = false;
    this.isEditing = false;
  }

  ngOnInit() {
    this.user = new User();

    this.formRegister = this.formBuilder.group(
      {
        name: ['', Validators.compose(
          [
            Validators.required,
            Validators.minLength(3)
          ]
        )],
        email: ['', Validators.compose(
          [
            Validators.required,
            Validators.minLength(10)
          ]
        )],
        password: ['', Validators.compose(
          [
            Validators.required,
            Validators.minLength(4)
          ]
        )]
      }
    );

    let idUser = this.route.snapshot.params.id;

    if (idUser != undefined) {
      this.userService.get(idUser).subscribe((response) => {
        this.user = response;
        this.title = 'Editar Usuário';
        this.buttonText = 'Editar'
        this.formRegister.patchValue(response);
        this.isLoaded = true;
        this.isEditing = true;
      });
    }
    else {
      this.title = 'Cadastro de Usuários';
      this.buttonText = 'Salvar';
      this.isLoaded = true;
    }
  }

  public getErrorMessage(field: AbstractControl, length: number): string {
    if (field.errors) {
      if (field.errors.required) {
        return 'Esse campo é obrigatório!';
      }

      if (field.errors.minlength) {
        return `Esse campo não atingiu a quantidade de caracteres mínima (${length})`;
      }
    }
  }

  public save(): void {
    this.user = { ...this.user, ...this.formRegister.value };

    if (!this.isEditing) {
      this.user.id = Math.floor(Math.random() * (2147483647 - 1 + 1)) + 1;
      this.user.created_at = this.datePipe.transform(Date.now());
      this.user.updated_at = this.datePipe.transform(Date.now());

      this.userService.save(this.user).subscribe(() => {
        this.message = 'Usuário cadastrado com sucesso!';
        this.cssClass = 'success';
        this.router.navigate(['']);
      }, (error) => {
        this.message = 'Problema ao cadastrar usuário! \n' + error.error;
        this.cssClass = 'danger';
      });
    } else {
      this.userService.update(this.user).subscribe(() => {
        this.message = 'Usuário editado com sucesso!';
        this.cssClass = 'success';
        this.router.navigate(['']);
      }, (error) => {
        this.message = 'Problema ao editar usuário! \n' + error.error;
        this.cssClass = 'danger';
      });
    }
  }

  public onKey(event): void {
    this.user = { ...this.user, ...this.formRegister.value };
  }

  private timeout() {
    setTimeout(() => {
      this.message = null;
      this.cssClass = null;
      this.timeout();
    }, 2000);
  }
}
