
import { Injectable } from '@angular/core';
import { LoggerService } from './Logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 constructor(private logger:LoggerService){}
 add(n1:number,n2:number){
  this.logger.log('Add method is called')
  return n1+n2
}
substract(n1:number,n2:number){
  this.logger.log('Substract method is called')
  return n1-n2
}
multiple(n1:number,n2:number){
   this.logger.log('Multiply method is called')
  return n1*n2
 }
}

