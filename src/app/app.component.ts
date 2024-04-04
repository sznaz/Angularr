import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HelloComponent } from './hello.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit,OnInit{
  title = 'note-project';
  name = 'angular'

  @ViewChild(HelloComponent) helloComponent! : HelloComponent;
  // @ViewChild("hello") helloCompTemp! : HelloComponent 
  // @ViewChild("input") inputField! : ElementRef

  ngOnInit(){
    console.log("oninit" + " " + this.helloComponent)
    // console.log(this.inputField)
  }
  ngAfterViewInit() {
    console.log(this.helloComponent)
    // console.log(this.helloCompTemp)
    // console.log(this.inputField)

    console.log(this.helloComponent)

  }

} 