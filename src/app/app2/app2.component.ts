import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription, from, of,map, filter, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class App2Component {
}