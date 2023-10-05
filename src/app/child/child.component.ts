import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit{
  ngOnInit(): void {
 }
val=''
execute(){
    console.log("Executing child")
    this.val='Hi Leela'
    
  }
}
