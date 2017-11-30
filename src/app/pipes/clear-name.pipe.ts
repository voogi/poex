import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearName'
})
export class ClearNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace("<<set:MS>><<set:M>><<set:S>>","");
  }

}
