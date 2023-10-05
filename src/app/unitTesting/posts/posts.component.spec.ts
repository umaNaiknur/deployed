import { of} from "rxjs"
import { Post } from "../modal/modal"
import { PostsComponent } from "./posts.component"
import { LoggerService } from "src/app/Logger/logger.service"
import { ServiceService } from "../service.service"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { DisplayComponent } from "../display/display.component"
import {  DebugElement } from "@angular/core"
import { By } from "@angular/platform-browser"




describe('PostsComponent',()=>{
  let post:Post[]=[]
  let mockPostService:any
  let postComponent:PostsComponent
  let mockLoggerService:LoggerService
  let fixture:ComponentFixture<PostsComponent>
//   @Component({
// selector:'app-display',
// template:'<div></div>'
//   })
//   class fakeComponent{}
  beforeEach(()=>{
    post=[
      {id:1,title:'name',body:"Hello Uma"},
      {id:2,title:'address',body:"Hello madhu"},
      {id:3,title:'home',body:"Hello Sammu"},
      {id:4,title:'college',body:"Hello appa"},
      {id:5,title:'Coocking',body:"Hello Mummy"},
      {id:6,title:'Hospital',body:"Hello Dummi"},
    ] 
    mockPostService=jasmine.createSpyObj('ServiceService',['postData','deletePost'])
    TestBed.configureTestingModule({
      imports:[],
      declarations:[PostsComponent,DisplayComponent],
      providers:[
        PostsComponent,
        {
          provide:ServiceService,
          useValue:mockPostService
        }
        
      ]
    })
    fixture=TestBed.createComponent(PostsComponent)
    postComponent =fixture.componentInstance
    // mockLoggerService=jasmine.createSpyObj('LoggerService',['log'])
    // postComponent=TestBed.inject(PostsComponent)
    // postService=TestBed.inject(ServiceService)
  })
  it('should get all the data of post',()=>{
    mockPostService.postData.and.returnValue(of(post))

    // postComponent.getPosts()
    postComponent.ngOnInit()
    // postComponent.posts=post
    expect(mockPostService.postData).toHaveBeenCalled()
    expect(postComponent.posts.length).toBe(6)

  })
  it('should delete data that id we passed',()=>{
   mockPostService.deletePost.and.returnValue(of(true))
    postComponent.posts=post
    postComponent.deletePostval(post[1])
    expect(postComponent.posts.length).toBe(5)
    // expect(mockPostService.postData).toHaveBeenCalledTimes(1)
  })
  it('delete post method should call only once',()=>{
    mockPostService.deletePost.and.returnValue(of(true))
    postComponent.posts=post
    postComponent.deletePostval(post[1])
    expect(mockPostService.deletePost).toHaveBeenCalledTimes(1)
  })
  it('should delete the exact object ',()=>{
    mockPostService.deletePost.and.returnValue(of(true))
    postComponent.posts=post
    postComponent.deletePostval(post[1])
    // for(let posts of postComponent.posts){
    //   expect(posts).not.toEqual(post[1])
    // }
    expect(postComponent.posts).not.toContain(post[1])
  })
  
  it('should set post directly from servvice',()=>{
    mockPostService.postData.and.returnValue(of(post))
    postComponent.ngOnInit()
    // fixture.detectChanges()
    expect(postComponent.posts.length).toBe(post.length)
  })
  it('should display div times of the length of post',()=>{
    mockPostService.postData.and.returnValue(of(post))
    fixture.detectChanges()
let debug:DebugElement=fixture.debugElement;
let ele=debug.queryAll(By.css('.post'))
expect(ele.length).toBe(6)

  })
  it('should call child component times the post values length by directive',()=>{
    mockPostService.postData.and.returnValue(of(post))
    fixture.detectChanges();
    let comp=fixture.debugElement.queryAll(By.directive(DisplayComponent))
    expect(comp.length).toBe(6)
    
  })
  it('should check wheather the post value is sending to Display component',()=>{
    mockPostService.postData.and.returnValue(of(post))
    fixture.detectChanges();
    let comp=fixture.debugElement.queryAll(By.directive(DisplayComponent))
    for(let i=0;i<comp.length;i++){
      let  postcompInsance=comp[i].componentInstance as DisplayComponent;
      expect(postcompInsance.data.id).toEqual(post[i].id)

    }
    
  })
})

describe('to trigger child component button to run method of parent compo',()=>{
  let mockService:any;
  let post:Post[]=[]
  let postComponent:PostsComponent;
  let fixture:ComponentFixture<PostsComponent>
  beforeEach(()=>{
    post=[
      {id:1,title:'name',body:"Hello Uma"},
      {id:2,title:'address',body:"Hello madhu"},
      {id:3,title:'home',body:"Hello Sammu"},
      {id:4,title:'college',body:"Hello appa"},
      {id:5,title:'Coocking',body:"Hello Mummy"},
      {id:6,title:'Hospital',body:"Hello Dummi"},
    ] 
    mockService=jasmine.createSpyObj(['postData','deletePost','getPost'])
    TestBed.configureTestingModule({
      declarations:[PostsComponent,DisplayComponent],
      providers:[PostsComponent,
      {
        provide:ServiceService,
        useValue:mockService
      }]

    })
    fixture=TestBed.createComponent(PostsComponent)
    postComponent=fixture.componentInstance
    mockService=TestBed.inject(ServiceService)
  })
  it('should trigger child button to execute parent method',()=>{
    spyOn(postComponent,'deletePostval')
    mockService.postData.and.returnValue(of(post))
    fixture.detectChanges()
    let debug=fixture.debugElement.queryAll(By.directive(DisplayComponent))
    for(let i=0;i<debug.length;i++){
      debug[i].query(By.css('button')).triggerEventHandler('click',{preventDefault:()=>{}})
      expect(postComponent.deletePostval).toHaveBeenCalledWith(post[i])
    }
  })
  it('trigger event button',()=>{
   spyOn(postComponent,'deleteOnee')
   mockService.postData.and.returnValue(of(post)) 
   fixture.detectChanges()
   let debug=fixture.debugElement.queryAll(By.directive(DisplayComponent))
   let but=debug[0].query(By.css('button'))
   but.triggerEventHandler('click',null)
   expect(postComponent.deleteOnee).toHaveBeenCalledWith(5)

  })
  it('emit values from child component to hit method in parent',()=>{

spyOn(postComponent,'deletePostval')
mockService.postData.and.returnValue(of(post))
fixture.detectChanges()
let debug=fixture.debugElement.queryAll(By.directive(DisplayComponent));
for(let i=0;i<debug.length;i++){
  (debug[i].componentInstance as DisplayComponent).delete.emit(post[i])
  expect(postComponent.deletePostval).toHaveBeenCalledWith(post[i])
}
expect(debug.length).toBe(6)
  })
})



