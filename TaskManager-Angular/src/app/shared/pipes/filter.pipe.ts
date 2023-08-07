import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchBy: string, searchText: string): any {
    if (value == null) {
      return null;
    }
    if ((searchBy === null || searchBy.trim() === "") ||
      (searchText === null || searchText.trim() === "")) {
      return value;
    }
    let resultArray: any[] = [];
    resultArray = value.filter((item) => {
      // Convert property value and searchText to lowercase for case-insensitive search
      let propertyValue = item[searchBy as keyof any].toString().toLowerCase();
      let searchValue = searchText.toLowerCase();
      return propertyValue.includes(searchValue);
    });
    return resultArray;
  }

}
