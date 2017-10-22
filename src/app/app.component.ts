import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	dataRe: string;
	onClicked(some) {
		console.log(`Typing ${some.keyCode}`);
		console.log(some);
	} 
}
