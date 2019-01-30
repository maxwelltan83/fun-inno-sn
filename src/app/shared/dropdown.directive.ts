import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  // @HostBinding('class.show') isShow = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    // this.isShow = !this.isShow;
  }
}
