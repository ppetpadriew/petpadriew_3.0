import {Input} from '@angular/core';

export class Hero {
    public constructor(public id: number, @Input() public name: string, public alterText = '', public power) {
    }

}
