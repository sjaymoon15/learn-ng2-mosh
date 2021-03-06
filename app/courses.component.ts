import {Component} from 'angular2/core'

@Component({
	selector: 'courses',
	template: `
		<h2>Courses</h2>
		{{title}}
		<ul>
			<li *ngFor='#course of courses'>
			{{course}}
			22
			</li>
		</ul>
		`
})
export class CoursesComponent {
	title: string = 'The title of courses page';
	courses: ['Course1', 'Course2', 'Course3'];
}