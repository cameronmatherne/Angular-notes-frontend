import { Component } from '@angular/core';

export interface Note {
  id: number;
  title: string;
  content: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Notes';



}
