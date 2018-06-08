import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyfor]'
})
export class MyforDirective implements OnInit {

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) { }

  @Input() set appMyfor(x: Number) {
    console.log("value of x" + x)
    for (let i = 0; i < x; i++) {
      this.view.createEmbeddedView(this.template);
    }
  }

  ngOnInit() {

  }
}
