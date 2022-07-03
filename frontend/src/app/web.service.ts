
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class WebService{
  static getTask() {
    throw new Error('Method not implemented.');
  }
    constructor(private http: HttpClient){}

 getTask(){
    return this.http.get('http://localhost:7080/api/tareas').toPromise();
 }


}



