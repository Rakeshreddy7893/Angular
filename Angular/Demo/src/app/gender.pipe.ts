import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  completeName : any;
  transform(empName:any,gender: any): any{
    if(gender =='Male'){
      return "mr." + empName;
    }
    else if(gender =='Female'){
      return "mrs." +empName

    }
    return empName;
   
  }

}
