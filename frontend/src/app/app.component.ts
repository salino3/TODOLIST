import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: 'Hola{{title}} <tareas></tareas>'
})
export class AppComponent {
  title = 'todolist';
}
