import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, count, debounceTime, distinct, elementAt, filter, first, from, last, max, of, skip, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit{
  searchForm!:FormGroup
  constructor(private fb:FormBuilder,private http:HttpClient){}
   arr$:Observable<number>=from([1,1,3,2,3,4,5,6,7])
ngOnInit(): void {
 this.searchForm=this.fb.group({      
  name:new FormControl('')
 })
 let data=true
 this.searchForm.get('name')?.valueChanges.pipe(
   // filter((val)=>val.length>=2),
  //  takeWhile(val=>data)
   // take(3),
  // takeLast(2),
  // filter((val)=>this.checkVal(val)),
  debounceTime(300),
  ).subscribe(val=>{
    console.log(val)
    //  this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(takeLast(2)).subscribe((val)=>console.log(val))
    this.arr$.pipe(
      // distinct(),
      // elementAt(3),
      // skip(8),
      // count(),
      // max()
    // takeLast(2)
    // first()
    // last()
    ).subscribe(data=>{console.log(data)})
 })
}
checkVal(val:number){
  return val>10?true:false
}
readValue(event:KeyboardEvent){

}


}
