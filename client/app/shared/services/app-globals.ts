import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
    userInfo: any;
}

// type script extension
// Extend the type, and declare the new function
declare global {

    // object
    interface Object {
        setInsertTag(): number;

        setModifyTag(): number;

        setDeleteTag(): number;

        isAdded(): boolean;

        isModified(): boolean;

        isDeleted(): boolean;
    }

    // array
    interface Array<T> {
        entityPush(entity: T, pk?: any, index?: any): void;

        entityPop(entity: T, pk?: any, index?: any): void;

        spliceEntity(entity: T): void;

        spliceEntityById(id: number): void;
    }
}

// // setInsertTag
// Object.prototype.setInsertTag = function (): number {
//     if (typeof this.tag !== 'undefined') {
//         this.tag = 4;
//         return this.tag;
//     } else {
//         return undefined;
//     }
// };

// // setModifyTag
// Object.prototype.setModifyTag = function (): number {
//     if (typeof this.tag !== 'undefined' && (this.tag === 0 || this.tag === 8)) {
//         this.tag = 16;
//         return this.tag;
//     } else {
//         return undefined;
//     }
// };

// // setDeleteTag
// Object.prototype.setDeleteTag = function (): number {
//     if (typeof this.tag !== 'undefined') {
//         this.tag = 8;
//         return this.tag;
//     } else {
//         return undefined;
//     }
// };

// // isAdded
// Object.prototype.isAdded = function (): boolean {
//     if (typeof this.tag !== 'undefined') {
//         return this.tag === 4;
//     }
//     return undefined;
// };

// // isModified
// Object.prototype.isModified = function (): boolean {
//     if (typeof this.tag !== 'undefined') {
//         return this.tag === 16;
//     }
//     return undefined;
// };

// // isDeleted
// Object.prototype.isDeleted = function (): boolean {
//     if (typeof this.tag !== 'undefined') {
//         return this.tag === 8;
//     }
//     return undefined;
// };

// entityPush
Array.prototype.entityPush = function (entity: any, pk: any, index: any): void {
    pk = typeof pk === 'undefined' ? 'id' : pk;

    if (typeof entity[pk] === 'undefined') {
        return;
    }

    if (entity[pk] === 0 && entity.tag === 0) {
        // New Insert
        entity.tag = 4;

        if (this.length === 0) {
            entity[pk] = 1;
        } else {
            const _pk = Math.max.apply(Math, this.map(function (o) {
                return o[pk];
            }));
            entity[pk] = _pk + 1;
        }

        if (typeof index === 'undefined' || index === null) {
            this.push(entity);
        } else {
            this.splice(index, 0, entity);
        }
        return;
    } else if (entity[pk] !== 0 && entity.tag === 0) {
        // Get From Server and Modify
        if (!index) {
            this.push(entity);
        } else {
            this.splice(index, 0, entity);
        }
        return;
    }
};

// entityPop
Array.prototype.entityPop = function (entity: any, pk: any, index: any): void {
    pk = typeof pk === 'undefined' ? 'id' : pk;

    if (typeof entity[pk] === 'undefined') {
        return;
    }
    if (entity[pk] !== 0) {
        if (entity.tag === 4) {
            // Delete After Insert
            for (let i = 0; i < this.length; i++) {
                if (this[i][pk] === entity[pk]) {
                    this.splice(i, 1);
                    break;
                }
            }
        } else if (entity.tag === 0 || entity.tag === 16) {
            // Get Form Server then (Delete Or Delete after Edit)
            entity.tag = 8;
        }
    }
};

// delete object
// Array.prototype.spliceEntity = function (sourceToRemove: any): void {
//     // Remove the deleted entry from list
//     let index = this.indexOf(sourceToRemove);
//     if (index != -1) { // Make sure the value exists
//         this.splice(index, 1);
//     }
// };

// // delete object by id
// Array.prototype.spliceEntityById = function (id: any): void {
//     // Remove the deleted entry from list
//     let index = this.map(function (x) {
//         return x.id;
//     }).indexOf(id);
//     if (index != -1) { // Make sure the value exists
//         this.splice(index, 1);
//     }
// };
