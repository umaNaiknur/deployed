import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, NgZone, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentComponent  implements OnInit,DoCheck{
constructor(public http:HttpClient,private zone:NgZone){}
  ngOnInit(): void {
    this.getData()
  }
getList:any
data=0
increament(){
this.data+=1

}
getData(){
  console.log('Started!!!')
  this.zone.runOutsideAngular(()=>{

    return this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res=>{
   console.log('Data arrived')
   
    })
  })
}
ngDoCheck(){
console.log(`Increased ${this.data++}`)
}

}
