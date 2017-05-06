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
    this.titleId = 1;//default value
    this.dateOfBirth = new Date('06-21-1985');
    this.address = null;
    this.bio = null;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(fn: string) {
    this._firstName = fn;
    this.fullName = this._firstName + ' ' + this._lastName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(ln: string) {
    this._lastName = ln;
    this.fullName = this._firstName + ' ' + this._lastName;
  }
} 