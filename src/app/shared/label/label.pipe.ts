import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';

@Pipe({name: 'label'})
export class LabelPipe implements PipeTransform {

    transform(value: any, label: string) {
        const lbl: string = isUndefined(label) ? 'text' : label;
        return lbl + ': ' + value;
    }

}
