import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, concatMap, exhaustMap, filter, from, fromEvent, interval, mergeMap, of, switchMap, take, timeInterval } from 'rxjs';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit{
  constructor(private http:HttpClient,private cdr:ChangeDetectorRef){}
  // of operator
  arr=[3,5,12,7,34,28]
   str="Uma Naiknur"
  student:Observable<number[]> =of(this.arr)
  studentName:Observable<string> =of('Uma')
  studentObj$:Observable<any> =of({name:"Uma",age:25})
  // ==================================================================
  //from operator
  value!:number
  department$:Observable<any>=from([1,2,3,4,5,6])
  ngOnInit(): void {
    // of operator
  this.studentName.subscribe(val=>{
    console.log(val)
  })
  this.student.subscribe(val=>{
    console.log(val)
  })
  this.studentObj$.subscribe(val=>{
    this.cdr.detectChanges()
    console.log(val)
  })
  // =============================================
  // from operator

  this.department$.subscribe(val=>{
    setTimeout(()=>{
      this.value=val
      console.log(val)
      this.cdr.detectChanges()
    },3000)
  })
    
  }

  // fromEvent
  @ViewChild('blurData')
  blurData!:ElementRef
  @ViewChild('rootLink')
  rootLink!:ElementRef

  onClick(){
    // let blurThis$=fromEvent(this.blurData.nativeElement,'click')
    // blurThis$.subscribe(val=>{
    //   console.log(val)
    // })

    this.department$.subscribe(val=>{
      setTimeout(()=>{
        this.value=val
        console.log(val)
        this.cdr.detectChanges()
      },3000)
    })
  }
  targetData(event:MouseEvent){
    let blurThis$=fromEvent(this.rootLink.nativeElement,'mouseover')
    blurThis$.subscribe(val=>{
      console.log(event.target as HTMLAnchorElement)
    })
  }
}
