import { Component } from '@angular/core';
import { Todo } from './todo'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit_8_Angular_Todo_Lab';

  todoList : Todo[] = [
    {task:"This assignment", completed:false}
  ];
}


