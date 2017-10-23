import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	courses = [
   {id: 1, name: 'Python'} ,
   {id: 2, name: 'NodeJs'} ,
   {id: 3, name: 'Angular 4'} ,
   {id: 4, name: 'MongoDB'} ,
   {id: 5, name: 'Express JS'} ,
  ];

 
}
