import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) uid!:string;
  @Input({required:true}) name!:string;
  
  tasks = [
    {
      id:"t1",
      userId: 'u1',
      title:"Master Angular",
      summary: "Learn Angular",
      dueDate: '2025-12-31'

    },
    {
      id: "t2", 
      userId: 'u2',
      title:"Master SpringBoot",
      summary:"Learn Java Backend",
      dueDate: '2026-01-12'
    }
  ]

  get selectedUserTask(){
    return this.tasks.filter((task) => task.userId === this.uid);
  }

  onCompleteTask(tid: string){
    this.tasks = this.tasks.filter((task) => task.id !== tid);

  }

  onStartAddTask(){
    
  }

  

  

}
