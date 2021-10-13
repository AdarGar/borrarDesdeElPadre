import { Component } from '@angular/core';

export type Person = {
  name: string;
  email: string;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people: Person[] = [
    {
      name: 'Yunior',
      email: 'yunior@squaads.com',
    },
    {
      name: 'Pedro',
      email: 'pedro@squaads.com',
    },
    {
      name: 'Borja',
      email: 'borja@squaads.com',
    },
  ];

  public removePerson(event: Person) {
    console.log(event);
    this.people = this.people.filter((u) => u.email != event.email);
  }
}
