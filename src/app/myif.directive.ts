import { Directive, TemplateRef,ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyif]'
})
export class MyifDirective implements OnInit{
  
  constructor(private template:TemplateRef<any>,private view:ViewContainerRef) { }
  @Input() set appMyif(x: boolean){
    console.log("value of x"+x)
    if(x){
      this.view.createEmbeddedView(this.template);
    }else{
      this.view.clear();
    }
  }

  ngOnInit(){

  }

}
