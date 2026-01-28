import { Component, EventEmitter, Input, Output} from '@angular/core';

type User = {
  id:string;
  name:string;
  avatar:string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required:true}) user!: User;

// @Input({required:true}) name!:string;
// @Input({required:true}) id!:string;
// @Input({required:true}) avatar!:string;
@Output() select = new EventEmitter<string>()

imagePath(){
return "assets/users/"+this.user.avatar;
}

onSelectUser(){
  this.select.emit(this.user.id);
  
}

}
