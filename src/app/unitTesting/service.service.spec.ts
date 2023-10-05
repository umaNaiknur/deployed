import { TestBed } from "@angular/core/testing"
import { ServiceService } from "./service.service"
import { HttpClient, HttpClientModule } from "@angular/common/http"
import {  HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { Post } from "./modal/modal"
import { of } from "rxjs"

describe('service service',()=>{
 
  let service:ServiceService
  let post:Post[]=[]
  let http:jasmine.SpyObj<HttpClient>
  beforeEach(()=>{
    http=jasmine.createSpyObj('HttpClient',['get'])
  TestBed.configureTestingModule({
    imports:[HttpClientModule],
    providers:[ServiceService,
    {
      provide:HttpClient,
      useValue:http
    }]

  })
  post=[
    {id:1,title:'name',body:"Hello Uma"},
    {id:2,title:'address',body:"Hello madhu"},
    {id:3,title:'home',body:"Hello Sammu"},
    {id:4,title:'college',body:"Hello appa"},
    {id:5,title:'Coocking',body:"Hello Mummy"},
    {id:6,title:'Hospital',body:"Hello Dummi"},
  ] 
  // service=new ServiceService(http)
  service=TestBed.inject(ServiceService)
  http=TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>
})
it('it should return postData',(done:DoneFn)=>{
  http.get.and.returnValue(of(post))
  service.postData().subscribe({
    next:(posts)=>{
      setTimeout(()=>{
      expect(post).toEqual(post)
      done()
    },10)
    },
    error:(err)=>{
done.fail()
    }
  })
  expect(http.get).toHaveBeenCalledTimes(1)
})
})
describe('should mock httpClient',()=>{
  let url='/data'
  interface Data{
    name:string
  }

  let httpClient:HttpClient;
  let service:any
  let httpTestingController:HttpTestingController
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ServiceService]
    })
service=TestBed.inject(ServiceService)
httpClient=TestBed.inject(HttpClient)
httpTestingController=TestBed.inject(HttpTestingController)
  })
  it('should call httpClient',(done:DoneFn)=>{
    let testData:Data={name:"uma"}
    httpClient.get<Data>(url).subscribe(data=>{
      expect(data).toEqual(testData)
      done()
    })
    // httpClient.get<Data>(url).subscribe()
    const request=httpTestingController.expectOne(url)
    request.flush(testData)
    expect(request.request.method).toBe('GET')
    // expect(httpClient.get.length).toBe(1)
  })
  it('should test multiple request',()=>{
    let testData:Data[]=[{name:"uma"},{name:"Sammu"}]
    httpClient.get<Data>(url).subscribe()
    httpClient.get<Data>(url).subscribe()
    const request=httpTestingController.match(url)
    expect(request.length).toBe(2)
    request[0].flush([])
    request[1].flush(testData)
    expect(httpClient.get.length).toBe(1)
  })
})

describe('getPosts()',()=>{
  let service:ServiceService;
  let httpTestingController:HttpTestingController
  let post:Post[]=[]
  beforeEach(()=>{
    post=[
      {id:1,title:'name',body:"Hello Uma"},
      {id:2,title:'address',body:"Hello madhu"},
      {id:3,title:'home',body:"Hello Sammu"},
      {id:4,title:'college',body:"Hello appa"},
      {id:5,title:'Coocking',body:"Hello Mummy"},
      {id:6,title:'Hospital',body:"Hello Dummi"},
    ] 
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ServiceService]
    })
    service=TestBed.inject(ServiceService)
    httpTestingController=TestBed.inject(HttpTestingController)
  })
  it('handle dependency injection',()=>{
    service.postData().subscribe()
    // service.deletePost(post[0]).subscribe()
    // service.postData().subscribe()
    let request=httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts')
request.flush(post)
expect(request.request.url).toBe('https://jsonplaceholder.typicode.com/posts')
expect(request.request.method).toBe('GET')


  })


  it('should retuen single post when getPOst is called',()=>{
    service.getPost(1).subscribe()
    // service.getPost(2).subscribe()
    let request=httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/posts/1`)
// expect(request.request.url).toBe('https://jsonplaceholder.typicode.com/posts/1')
})
//to verify only 1 time the perticular url is executng
afterEach(()=>{
    httpTestingController.verify()

  })
})