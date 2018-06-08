import { Directive, ElementRef, Renderer, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyhide]'
})
export class MyhideDirective implements OnInit{
  @Input() appMyhide:boolean;
  constructor(private element:ElementRef,private rendered:Renderer) { }

  ngOnInit(){
    console.log("printing "+this.appMyhide);
    if (this.appMyhide){
      console.log('Inside if')
    this.rendered.setElementStyle(this.element.nativeElement,'display','none');
    }
  }

}
