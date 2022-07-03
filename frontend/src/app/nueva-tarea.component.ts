import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  // tipo any porque viene de un recurso externo
  tareas: any;

  constructor(private webservice: WebService) {}

  async ngOnInit() {
    let respuesta = await this.webservice.getTask();
    console.log(respuesta);
    this.tareas = respuesta;
  }
}
