import { LoggerService } from '../Logger/logger.service';
import { PipePipe } from './pipe.pipe';

describe('PipePipe', () => {
  let pipe:PipePipe;
  let mockLoggerService:LoggerService
beforeEach(()=>{
  console.log('beforeEach')
  mockLoggerService=jasmine.createSpyObj('LoggerService',['log'])
pipe=new PipePipe(mockLoggerService)
})

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('return number strength',()=>{
    console.log('strength')
expect(pipe.transform(5)).toEqual('5 is weak')
expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  })
});
