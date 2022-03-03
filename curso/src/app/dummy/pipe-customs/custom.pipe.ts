import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const currentYear: any = new Date().getFullYear();
    const userBirthYears: any = new Date(value).getFullYear();
    const userAge = currentYear -userBirthYears;

    return userAge;
  }

}
