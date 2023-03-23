import { Component } from '@angular/core';
import { Todo } from '../store/todo';
import { EntityCollectionServiceFactory } from '@ngrx/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(serviceFactory: EntityCollectionServiceFactory,
    private router: Router){
    this.todoService = serviceFarctory.create<Todo>("Todo");
  }
  todoService:EntityCollectionServiceFactory<Todo>;

  todoForm:Todo = {
    id:0,
    title:'',
    completed:false,
  };

  ngOnInit(): void{

  }
save(){
this.todoService.add(this.todoForm).suscribe(()=>{
this.router.navigate(["/"]);
});
}
}
