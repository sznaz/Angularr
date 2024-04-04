import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit, DoCheck{
  name: string = ''
  isValid : boolean = true;
  constructor(){
    console.log("parent constructor is called")
  }
  ngOnInit(): void {
    console.log("parent Oninit")
  }
  // ngOnChanges(){
  //   console.log("parent Onchanges")
  // }
  ngDoCheck(){
    console.log("parent do check")
  }
  showChild(){
    this.isValid = !this.isValid
  }
}
