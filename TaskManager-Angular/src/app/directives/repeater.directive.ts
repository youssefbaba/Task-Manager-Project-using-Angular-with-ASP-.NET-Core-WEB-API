import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective {

  @Input("appRepeater") counter!: number;

  // the structural directive is a directive which creates an embedded view inside template view
  // the viewContainerRef represents the reference of the child view that is created by using the structural directive.
  // the TemplateRef represents the reference of <ng-template></ng-template> tag that is created automatically
  constructor(private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>) {

      this.viewContainerRef.clear(); // because i want to create my own embedded view
  }

  ngOnInit() {
    for (let i = 0; i < this.counter; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: i });
    }
  }

}
