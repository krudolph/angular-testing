import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[brRepeat]'
})
export class RepeatDirective implements OnChanges {

  @Input() brRepeat: number;

  constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.vcr.clear();

    for (let i = 0; i < this.brRepeat; i++) {
      this.vcr.createEmbeddedView(this.template);
    }

  }

}
