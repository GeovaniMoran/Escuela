import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';




@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/Hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/greeting')
  getGreeting(): string {
    return this.appService.getGreeting();
  }


  @Post('/sumar/:sumado1/:sumado2')
  getResultado(
    @Param('sumado1') sumado1: string,
    @Param('sumado2') sumado2: string,
  ):number {
    const resultado= this.appService.sumar(+sumado1,+sumado2);
    return resultado;
  }









}
