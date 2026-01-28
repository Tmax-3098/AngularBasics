import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from "../../node_modules/@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  userArray = signal(DUMMY_USERS);
  selectedUserId?:string ;
  onSelectUser(id: string){
    this.selectedUserId = id;
  }

  get selectedUser(){
    return this.userArray().find((user) => user.id === this.selectedUserId)!;
  }
}
