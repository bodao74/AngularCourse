import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false; 
  @HostListener('document: click', ['$event']) toggleOpen(evento: Event){
    //this.isOpen = !this.isOpen;
    this.isOpen = this.elRef.nativeElement.contains(evento.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) { }

}
