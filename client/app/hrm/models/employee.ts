export interface IEmployee {
  id: number,
  firstName: string;
  lastName: string;
  fullName: string;
  titleId: number;
  dateOfBirth: Date;
  address: string;
  bio: string
}

export class Employee {
  private _firstName: string;
  private _lastName: string;
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  titleId: number;
  dateOfBirth: Date;
  address: string;
  bio: string

  constructor() {
    this.id = 0;
    this.firstName = null;
    this.lastName = null;
    this.fullName = null;
    this.titleId = 0;
    this.dateOfBirth = new Date();
    this.address = null;
    this.bio = null;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
    this.fullName = this._firstName + ' ' + this._lastName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
    this.fullName = this._firstName + ' ' + this._lastName;
  }
} 