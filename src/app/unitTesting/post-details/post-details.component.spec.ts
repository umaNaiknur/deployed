import { ComponentFixture, TestBed } from "@angular/core/testing"
import { PostDetailsComponent } from "./post-details.component"
import { ServiceService } from "../service.service"
import { ActivatedRoute, ParamMap } from "@angular/router"
import { of } from "rxjs"
import { FormsModule } from "@angular/forms"
import { By } from "@angular/platform-browser"

fdescribe('Postdetails',()=>{
  let mockService:jasmine.SpyObj<ServiceService>
  let mockActivatedRoute:any
  let mockLocation:Location
  let fixture:ComponentFixture<PostDetailsComponent>
  let postcomponent:PostDetailsComponent
  beforeEach(()=>{
    mockService=jasmine.createSpyObj('ServiceService',['getPost','updatePost']);
    mockLocation=jasmine.createSpyObj('Location',['back'])
    mockActivatedRoute=jasmine.createSpyObj('ActivatedRoute',['snapshot'])
    let paramSpy=jasmine.createSpyObj('ParamMap',['get'])
    paramSpy.get.and.returnValue('3')
    mockActivatedRoute.snapshot={paramMap:paramSpy}
    TestBed.configureTestingModule({
      declarations:[PostDetailsComponent],
      imports:[FormsModule],
      providers:[
        {provide:ServiceService,useValue:mockService},
        {provide:ActivatedRoute,useValue:mockActivatedRoute},
        {provide:Location,useValue:mockLocation},
        
      ]
    })
    fixture=TestBed.createComponent(PostDetailsComponent)
    postcomponent=fixture.componentInstance
    
  })
  it('check title in h2',()=>{
    mockService.getPost.and.returnValue(of(
      {id:1,title:"Uma",body:"Hello"}
    ))
    fixture.detectChanges();
    const debug=fixture.nativeElement.querySelector('h2') as HTMLElement;
    expect(debug.textContent).toBe(postcomponent.post.title)


  })
})