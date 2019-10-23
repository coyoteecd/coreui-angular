import { Component, HostBinding, HostListener, Optional } from '@angular/core';

import { AppSidebarService } from './app-sidebar.service';

@Component({
  selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
  template: ``
})
export class AppSidebarMinimizerComponent {

  @HostBinding('attr.role') role = 'button';
  @HostBinding('class.sidebar-minimizer') _minimizer = true;

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.sidebarService.toggle({minimize: 'toggle'});
  }

  constructor(
    private sidebarService: AppSidebarService
  ) { }
}
