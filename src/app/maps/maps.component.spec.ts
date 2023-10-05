import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MapsComponent } from './maps.component';
import { Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';

fdescribe('MapsComponent', () => {
  let component: MapsComponent;
  let http:HttpClient
  let cdr:ChangeDetectorRef
  let fixture: ComponentFixture<MapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsComponent],
      providers:[HttpClient,{provide:ChangeDetectorRef,useValue:jasmine.createSpyObj('ChangeDetectorRef',['detectChanges'])},
        {provide:HttpClient,useValue:http}
      ]
    });
    fixture = TestBed.createComponent(MapsComponent);
    component = fixture.componentInstance;
    cdr=TestBed.inject(ChangeDetectorRef)
    
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    let arr=[1,2,4,6,8,9]
     component.department$=from(arr)
    let button = fixture.nativeElement.querySelector('button');
    button.click()
    tick(3000)
    // cdr.detectChanges()
    fixture.detectChanges()
    expect(component.value).toBe(9)
  }));
});
