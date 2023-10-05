import { first } from "rxjs"
import { PostsComponent } from "../posts/posts.component"
import { DisplayComponent } from "./display.component"
import { ComponentFixture, TestBed, async } from "@angular/core/testing"
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core"
import { Post } from "../modal/modal"
import { AppRoutingModule } from "src/app/app-routing.module"
import { RouterTestingModule } from "@angular/router/testing"
import { By } from "@angular/platform-browser"


describe('displayComponent',()=>{
  let fixture:ComponentFixture<DisplayComponent>
  let display:DisplayComponent
  beforeEach(()=>{
    TestBed.configureTestingModule({
    declarations:[DisplayComponent],

    })
    fixture=TestBed.createComponent(DisplayComponent)
    display=fixture.componentInstance;
})

  it('should create post component',async()=>{
    
  expect(display).toBeDefined()
  })
  it('should rise an event when delete is clicked',async()=>{
let post={id:1,title:'name',body:"Hello Uma"}
display.data=post
display.delete.pipe(first()).subscribe(selectedPost=>{
  expect(selectedPost).toEqual(post)
})
display.onDelete(new MouseEvent('click'))
  })
  it('it should detect p tag',()=>{
    const post:Post={id:1,title:'name',body:"Hello Uma"};
    display.data=post
    fixture.detectChanges()
    let bannerDe:DebugElement=fixture.debugElement;
    //for single tage
    // let elementRef:HTMLElement=bannerDe.query(By.css('a')).nativeElement
    // let a=elementRef.querySelector('a')

    // for multiple same tags
    let values=['1','name','Hello Uma']
    let tags=fixture.nativeElement.querySelectorAll('a')
    expect(tags.length).toBe(2)
    tags.forEach((tag:any,index:any)=>{
      expect(tag.textContent).toEqual(values[index])
    })
    
    // expect(elementRef?.textContent).toContain(post.id)

  })
})