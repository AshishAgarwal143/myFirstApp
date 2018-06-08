import { Directive, ElementRef, Renderer, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyred]'
})
export class MyredDirective implements OnInit{
  @Input() appMyred:string;
  constructor(private element:ElementRef, private renderer:Renderer) { }

  ngOnInit(){
    console.log(this.appMyred);
    this.renderer.setElementStyle(this.element.nativeElement, 'color', this.appMyred)
  }
}
