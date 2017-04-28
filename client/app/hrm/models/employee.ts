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
  private _fullName: string;
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

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    if (value === null || value === undefined || value === '') {
      this._fullName = null;
    }
    else {
      this._fullName = this.firstName + ' ' + this.lastName;
    }
  }
} 