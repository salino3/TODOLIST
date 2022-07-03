import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

//
import { TareasComponent } from './tareas/tareas.component';
import { WebService} from './web.service';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';

@NgModule({
  declarations: [AppComponent, TareasComponent, NuevaTareaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [WebService],
  bootstrap: [AppComponent],
})
export class AppModule {}
