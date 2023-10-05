import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';


describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[LoggerService]
    });
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be empty at strating',()=>{
    let count=service.messages.length
    expect(count).toBe(0)
  })
  it('should add message whit log is called',()=>{
    service.log('message')
    expect(service.messages.length).toBe(1)
  })
  it('should clear all the messages when clear is called',()=>{
    service.log('Messages')
    service.clear();
    expect(service.messages.length).toBe(0)
  })
});
