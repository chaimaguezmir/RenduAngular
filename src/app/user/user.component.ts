import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  titre: string = 'hello';
  color = 'blue';
  person = {
    id: 1,
    name: 'test',
    age: 20,
  };
  quantity = 8;
  imgsrc = '/assets/test.jpg';
  height = 100;
  width = 100;

  acheter() {
    this.quantity--;
  }
  // onInputChange(event: Event){
  //   const el = event.target as HTMLInputElement
  //   this.color = el.value
  // }
}
