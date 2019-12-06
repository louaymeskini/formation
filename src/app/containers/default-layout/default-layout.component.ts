import {Component} from '@angular/core';
import {navItems} from '../../_nav';
import {adminNav} from '../../_nav-admin';
import {associationNav} from '../../_nav-association';
import {AuthService} from '../../views/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public adminNav = adminNav;
  public associationNav = associationNav;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  constructor(private authService: AuthService) {
  }

  logedOut() {
    this.authService.logout();
  }

  navToDisplay() {
    if (this.authService.getType() === 'admin') {
      return this.adminNav;
    } else if (this.authService.getType() === 'association') {
      return this.associationNav;
    }
  }

}
