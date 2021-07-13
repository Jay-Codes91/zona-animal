import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(value: any, args: any): any {
    
    const animal = [];

    for(const ani of value){
      
      if(ani.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1){
        animal.push(ani);
      }
    }
    return animal;
  }

}
