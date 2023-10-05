import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./Logger/logger.service"
import { AuthService } from "./auth.service"


describe('AuthService',()=>{
  let mockLoggerService:jasmine.SpyObj<LoggerService>;
  let auth:AuthService;
beforeEach(()=>{
  mockLoggerService=jasmine.createSpyObj('LoggerService',['log','clear'])
  TestBed.configureTestingModule({
    providers:[AuthService,
    {
      provide:LoggerService,
      useValue:mockLoggerService
    }]
  })
// mockLoggerService=jasmine.createSpyObj('LoggerService',['log'])
auth=TestBed.inject(AuthService)
mockLoggerService=TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>

})

  it('should add 2 numbers',()=>{ 
    
    let add=auth.add(2,4) 
    expect(add).toBe(6)
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  })
  it('should substract 2 numbers',()=>{
  
    let substract=auth.substract(6,4)
    expect(substract).toBe(2)
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)

  })
  it('should multipy 2 numbers',()=>{
    let substract=auth.multiple(6,4)
    expect(substract).toBe(24)
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)

  })
})