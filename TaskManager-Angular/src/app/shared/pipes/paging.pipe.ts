import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paging',
  pure: false
})
export class PagingPipe implements PipeTransform {

  transform(value: any[], currentPageIndex: number, pageSize: number): any {

    if (value == null) {
      return null;
    }
    
    let resultArray : any[] = [];
    let startIndex = currentPageIndex * pageSize;  //1  => 3,4,5
    let endIndex = startIndex + pageSize; // 6
    resultArray = value.slice(startIndex, endIndex);
    
    return resultArray;
  }

}
