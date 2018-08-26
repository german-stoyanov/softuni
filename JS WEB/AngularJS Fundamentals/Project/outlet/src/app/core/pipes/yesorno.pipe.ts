import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesorno'
})
export class YesornoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
      return 'yes'
    }
    else{
      return 'no'
    }
  }

}
