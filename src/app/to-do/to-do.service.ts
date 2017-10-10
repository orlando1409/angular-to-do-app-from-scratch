import { TODO_ITEMS } from '../../api/to-do-data';
import { Todo } from './to-do';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
private pItems = TODO_ITEMS;
   getTodosFromData(): Todo[] {
    console.log(this.pItems);
    return this.pItems
  }
   addTodo(todo: Todo) {
    this.pItems.push(todo);
    console.log(this.pItems);
  }
   updateTodo(todo: Todo) {
    const index = this.pItems.map((x) => { return x.id; }).indexOf(todo.id);
    this.pItems[index] = todo;
  }
   deleteTodo(todo: Todo) {
    this.pItems.splice(this.pItems.indexOf(todo), 1);
    console.log(this.pItems);
  }
 constructor() { }
}
