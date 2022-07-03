import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

@Output() nuevaTarea = new EventEmitter();

  constructor(private webservice: WebService) {}

  tarea = { trabajo: '', usuario: '' };
post(){
  this.webservice.postTask(this.tarea);
  this.nuevaTarea.emit(this.tarea);
}
  ngOnInit(): void {}
}


