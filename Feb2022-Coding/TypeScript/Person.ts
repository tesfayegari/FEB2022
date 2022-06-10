export class Person {
  protected name: string;
  protected dateOfBirth: Date;
  public ssn: string;

  constructor(n: string, dob: Date) {
    this.name = n;
    this.dateOfBirth = dob;
  }

  sayName() {
    return this.name;
  }

  getDOB() {
    return this.dateOfBirth;
  }
}




