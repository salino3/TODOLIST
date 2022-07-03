import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  template: `Listado tareas:  <div  *ngFor="let tarea of tareas">Tarea: {{tarea.trabajo}}, Usuario: {{tarea.usuario}} </div>`
})
export class TareasComponent implements OnInit {
  // tipo any porque viene de un recurso externo
  tareas: any;

  constructor(public webservice: WebService) {}

   ngOnInit() {

  }
}
