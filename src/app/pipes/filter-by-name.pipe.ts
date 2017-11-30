import {Pipe, PipeTransform} from '@angular/core';
import {IStash} from "../shared/IStash";
import {IItem} from '../shared/IItem';
import {isUndefined} from 'util';

@Pipe({
    name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value.filter( data => data.items.filter( (i:IItem) => {
            return (i.name.trim().toLowerCase().indexOf(args.trim().toLowerCase()) !== -1)
        }).length !== 0);
    }

}
