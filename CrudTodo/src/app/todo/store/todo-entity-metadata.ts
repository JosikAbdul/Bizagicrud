import { EntityMetadataMap } from '@ngrx/data';
import { Todo } from './todo';

export const todoEntityMetadata:EntityMetadataMap = {
Todo:{
   selectId:(todo:Todo)=> todo.id
}
}
