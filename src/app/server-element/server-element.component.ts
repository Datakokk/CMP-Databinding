import { 
    Component, 
    Input, 
    OnInit, 
    ViewEncapsulation, 
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'], 
  encapsulation: ViewEncapsulation.Emulated//ShadowDom, None
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('aliasElement') element22: {type:string, name:string, content:string}
  @Input() name:string;

  constructor() { console.log("constructor called");}

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges is  called!!!!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  ngDoCheck(){
    console.log('ngDoCheck called!!!!');
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit is here!!!!");
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked is runingggggg!');
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit is here!///////////!!!");
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked is runing************!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy calleddd the end!!!!!!!!!!!');
  }
}
