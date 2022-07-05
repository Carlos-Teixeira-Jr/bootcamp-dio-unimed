import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: "Carlos",
        lastName: "Teixeira",
        age: 34
      },
      {
        firstName: "Daniel",
        lastName: "Soares",
        age: 28
      },
      {
        firstName: "Ivonildo",
        lastName: "Machado",
        age: 30
      },
      {
        firstName: "Márcio",
        lastName: "Santos",
        age: 40
      },
    ]

    return of(peopleArray)
  }

}
