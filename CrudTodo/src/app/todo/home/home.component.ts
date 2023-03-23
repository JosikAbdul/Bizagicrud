import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Todo } from '../store/todo';
import { Observable } from 'rxjs';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todoService : EntityCollectionService<Todo>;
  allTodo$: Observable<Todo[]>;

  deleteModal:any;
  idToDelete:number=0;

  constructor(serviceFactory: EntityCollectionServiceFactory) {
    this.todoService = serviceFactory.create<Todo>("Todo");
    this.allTodo$ = this.todoService.entities$;
  }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("")
    )

    this.todoService.getAll();
  }
}
