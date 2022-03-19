import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Daniel';
  age = 33;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Daniel',
    age: 33,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onKeyUp(event: Event) {
    const element = event.target as HTMLInputElement;
    console.log(element.value);
    this.person.name = element.value;
  }
}
