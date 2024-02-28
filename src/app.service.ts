import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '¡Hola Mundo!';
  }


 getGreeting(): string {
    return 'Aqui hay gretting';
  }

  sumar(a:number, b:number): number{
    return a+b;
  }
}
