import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() name : string = ''
  count : number = 0
  interval: any
  @ContentChild('projectedCont') projectedCont : any
  constructor(){
    console.log("child constructor is called")
  }

  ngOnInit(): void {
    console.log("child oninit")
    console.log("oninit" + this.projectedCont)

    // this.interval = setInterval(() => {
    //   this.count = this.count+1
    //   console.log(this.count)
    // }, 1000);
  }
  // ngOnChanges(changes : SimpleChanges){
  //   console.log("child Onchanges")
  //   console.log(changes)
  // }
  ngDoCheck(){
    console.log("child do check")
    console.log("onchanges" + " " + this.projectedCont)

  }
  ngAfterContentInit(): void {
    console.log("in after content init")
    console.log("after content" + this.projectedCont)

  }
  ngAfterContentChecked(): void {
    console.log("in after content checked")
  }
  ngAfterViewInit(): void {
    console.log("in after content init")

  }
  ngAfterViewChecked(): void {
    console.log("in after view checked")

  }
  ngOnDestroy(): void {
    console.log("child destroy called")
    // clearInterval(this.interval)
  }
}
