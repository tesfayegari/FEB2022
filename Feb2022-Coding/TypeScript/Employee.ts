import { Person } from "./Person";

export class Employee extends Person {

  constructor() {
    super('John Do', new Date('4/1/2000'));
  }

  private employeeID: number;
  private workPhone: string;

  getEmployee() {
    return "Name: " + this.name + " DOB: " + this.dateOfBirth;
  }

}
