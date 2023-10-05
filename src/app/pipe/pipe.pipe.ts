import { Pipe, PipeTransform } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Pipe({
  name: 'Pipe'
})
export class PipePipe implements PipeTransform {
constructor(private log:LoggerService){}
  transform(value: number): unknown {
   this.log.log('logger is called')
    if(value>10){
      return value + ` is Strong`
    } else if(value>5){
      return value+ ` is normal`
    } else{
      return value + ` is weak`
    }
  }

}
