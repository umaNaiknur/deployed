import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit,OnDestroy{
  constructor(private cdr:ChangeDetectorRef){}
  agentName: string = '';
  mySub: Subscription = new Subscription();
  agent!: Observable<string>;

  ngOnDestroy(): void {
    this.mySub.unsubscribe();
  }
  ngOnInit(): void {
    this.agent = new Observable((observer) => {
      try {
       observer.next('Uma')
    //  this.mySub=  interval(3000).subscribe(()=>{
    //      observer.next('hello')
    //      this.cdr.detectChanges()
    //     })
    //     this.mySub=interval(6000).subscribe(()=>{
    //       observer.next('good')
    //       this.cdr.detectChanges()
    //    })   
       
      } catch (error) {
        observer.error(error)
      }
    })
    this.mySub = this.agent.subscribe((val) => {
      this.agentName = val;
      console.log(this.agentName);
    });
  }

}
