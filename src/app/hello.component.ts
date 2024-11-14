import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template:`<h1> Hello {{name}}</h1>`,
  styles: [`h1{font-family: lato;}`]
})

export class HelloComponent {

@Input() name : any;
private somePrivateProp : any;

logSomeThing(){
  console.log('HelloComponent ; logSomething:: Something!')
  console.log('HelloComponent ; logSomething:: Something!')
  console.log('HelloComponent ; logSomething:: Something!')
  console.log('HelloComponent ; logSomething:: Something!')
  console.log('HelloComponent ; logSomething:: Something!')
  console.log('HelloComponent ; logSomething:: Something!')
  console.log('HelloComponent ; logSomething:: Something!')
  console.log('HelloComponent ; logSomething:: Something!')
  console.log('changessssss!')
}
}
