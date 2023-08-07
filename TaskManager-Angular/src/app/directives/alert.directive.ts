import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective implements OnInit {

  // we can use input properties in the directive to receive parameters from host element
  @Input("error") error!: string;

  @HostBinding("title") titleProperty! : string;

  divElement: any;
  spanElement: any;
  spanText: any;

  //elementRef property represents the host element = an html element in which the directive is invoked
  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
  }


  ngOnInit(): void {
    
    this.divElement = this.renderer.createElement("div");
    this.renderer.addClass(this.divElement, "alert");
    this.renderer.addClass(this.divElement, "alert-danger");
    this.renderer.setAttribute(this.divElement, "role", "alert");
    this.renderer.setStyle(this.divElement, "transition", "transform 0.5s");
    this.spanElement = this.renderer.createElement("span");
    this.spanText = this.renderer.createText(this.error);
    this.renderer.appendChild(this.spanElement, this.spanText);
    this.renderer.appendChild(this.divElement, this.spanElement);

    // Append the alert to the nativeElement 
    let element = this.elementRef.nativeElement;
    this.renderer.appendChild(element, this.divElement);

    this.titleProperty = "Please try again!";
  }

  // when the mouse enter the element
  @HostListener("mouseenter")
  onMouseEnter() {

    // Add styles using Renderer2
    this.renderer.setStyle(this.divElement, "transform", "scale(1.1)");
  }

  // when the mouse leaves the element
  @HostListener("mouseleave")
  onMouseLeave() {

    // Add styles using Renderer2
    this.renderer.setStyle(this.divElement, "transform", "scale(1)");
  }
}
