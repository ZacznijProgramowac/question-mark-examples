import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dog: Animal;

  constructor() {
    setTimeout(() => {
      this.dog = { name: 'Imię psa to Reksio' };
    }, 3000);
  }
}
interface Animal {
  name: string;
}
