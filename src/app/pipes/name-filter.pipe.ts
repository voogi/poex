import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter( data => (data.name.trim().toLowerCase().indexOf(args.trim().toLowerCase()) !== -1));
  }

}
