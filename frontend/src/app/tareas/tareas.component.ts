import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  template: `Listado tareas:
    <div *ngFor="let tarea of tareas">
      Tarea: {{ tarea.trabajo }}, Usuario: {{ tarea.usuario }}
    </div>`,
})
export class TareasComponent implements OnInit {
  // tipo any porque viene de un recurso externo
  username: any;
  tareasLista: any;

  constructor(
    private webservice: WebService,
    private rutaActiva: ActivatedRoute
  ) {}

  // snapshotpara acceder al valor de una propriedad en concreto
  ngOnInit(): void {
    this.username = this.rutaActiva.snapshot.params['username'];
    this.webservice.getTask(this.username);
    this.webservice.tareasSujeto.subscribe((tareas) => {
   this.tareasLista = tareas;
    });
  }

}
