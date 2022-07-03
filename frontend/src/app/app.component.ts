import { Component, ViewChild } from '@angular/core';
import { TareasComponent } from './tareas/tareas.component';
//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(TareasComponent) tareas:any = TareasComponent;

  nTarea(tarea: any) {
    this.tareas.tareas.push(tarea);
  }
}
