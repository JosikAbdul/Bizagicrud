import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityCollectionServiceFactory } from '@ngrx/data';
import { Todo } from '../store/todo';

type NewType = EntityCollectionServiceFactory;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(serviceFactory: NewType,
    private router: Router,
    private route: ActivatedRoute){
    this.todoService = serviceFarctory.create<Todo>("Todo");
  }
  todoService:EntityCollectionServiceFactory<Todo>;}
  todoForm:Todo = {
    id:0,
    title:'',
    completed:false,
  };

  ngOnInit(): void{
  let fetchFormData = combineLatest(
    [
      this.route.paraMap,
      this.todoService.entities$
    ]
  ).suscribe(([params, todoFromStore])=>{
    var id = Number(params.get('id'));
    var filtedTodo =todoFromStore.filter((c)=> c.id == id)
    if(filtedTodo){
      this.todoForm ={...filtedTodo[0]}
    }
    else{
      this.router.navigate(["/"]);
    }
  })
  }
  update(){
    this.todoService.update(this.todoForm).suscribe(()=>{this.router.navigate(['/']);})

  }

