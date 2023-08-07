import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortBy: string, sortOrder: string): any {

    if (value == null) {
      return null;
    }

    if (sortBy === null || sortBy.trim() === "") {
      return value;
    }

    let sortedArray = value.slice().sort((object1, object2) => {
      let sortByOne = object1.hasOwnProperty(sortBy) ? object1[sortBy] : '';
      let sortByTwo = object2.hasOwnProperty(sortBy) ? object2[sortBy] : '';

      if (typeof sortByOne != typeof sortByOne) {
        return 0;
      } else {  //  they have the same type
        switch (typeof sortByOne) {
          case 'string':
            sortByOne = object1[sortBy].toUpperCase();
            sortByTwo = object2[sortBy].toUpperCase();
            return this.sortingTwoProperties(sortByOne, sortByTwo);
          case 'number':
            return this.sortingTwoProperties(sortByOne, sortByTwo);
          default:
            return 0;
        }
      }
    });

    if (sortOrder == "ASC") {
      return sortedArray;
    } else {
      return sortedArray.reverse();
    }
  }

  private sortingTwoProperties(propOne: any, propTwo: any): number {
    if (propOne < propTwo) {
      return -1;
    } else if (propOne > propTwo) {
      return 1;
    } else {
      return 0;
    }
  }
}
