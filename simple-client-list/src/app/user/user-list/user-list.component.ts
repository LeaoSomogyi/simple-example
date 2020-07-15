import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { User } from '@user/user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[];
  public isLoaded: boolean;
  public idToRemove: number;
  public message: string;

  constructor(private userService: UserService,
    private modalService: NgbModal) {
    this.users = [];
    this.isLoaded = false;
  }

  ngOnInit() {
    this.getAll();
  }

  public getAll(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
      this.isLoaded = true;
    });
  }

  public removeUser(): void {
    this.userService.delete(this.idToRemove).subscribe(() => {
      this.message = 'Usuário removido com sucesso!';
      this.getAll();
      this.modalService.dismissAll();
      this.timeout();
    });
  }

  public open(content, userId) {
    this.modalService.open(content);

    if (userId) {
      this.idToRemove = userId;
    }
  }

  private timeout() {
    setTimeout(() => {
      this.message = null;
      this.timeout();
    }, 2000);
  }
}
