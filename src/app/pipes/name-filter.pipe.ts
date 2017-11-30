import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let retVal = value.filter( data => {
      return data.name.trim().toLowerCase().indexOf(args.trim().toLowerCase()) !== -1 &&
        data.note !== undefined;
    });

    retVal.map( data => {
      if(data.name === ""){
        data.name = "N/A";
      }
      return data;
    });

    return retVal;
  }

}
