import { Component } from '@angular/core'
import { CoursesService } from './courses.service'

@Component({
	selector: 'courses',
	template: `
				{{ course.title | uppercase | lowercase }} <br/>
				{{ course.students | number }} <br/>
				{{ course.rating | number:'1.2-2'}} <br/>
				{{ course.price | currency:'INR':'3.2'}} <br/>
				{{ course.date | date }} <br/>
				{{ data | summary: 80 }}
			  `
})

export class CoursesComponent {
	data = "This Angular is running in the development mode. Call enableProdMode() to enable the production mode."
	course = {
		title: 'The complete Angular 4 Course',
		students: 30541,
		rating: 5.5412,
		price: 95.35,
		date: new Date()
	};

}