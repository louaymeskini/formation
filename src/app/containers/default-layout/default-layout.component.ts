import {Component, OnInit} from '@angular/core';
import {navItems} from '../../_nav';
import {adminNav} from '../../_nav-admin';
import {associationNav} from '../../_nav-association';
import {AuthService} from '../../views/services/auth.service';
import {benevoleNav} from '../../_nav-benevole';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit{
  public sidebarMinimized = false;
  public navItems = navItems;
  public adminNav = adminNav;
  public associationNav = associationNav;
  public benevoleNav = benevoleNav;
  name: string;

  ngOnInit () {
    // this.nameToDisplay();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  constructor(private authService: AuthService,
              private router: Router) {
  }

  logedOut() {
    this.authService.logout();
  }

  navToDisplay() {
    if (this.authService.getType() === 'admin' || localStorage.getItem('idAdmin')) {
      this.name = 'administrateur'
      return this.adminNav;
    } else if (this.authService.getType() === 'association' || localStorage.getItem('idAssociation')) {
      this.name = 'association'
      return this.associationNav;
    } else if (this.authService.getType() === 'benevole' || localStorage.getItem('idBenevole')) {
      this.name = 'benevole'
      return  this.benevoleNav;
    }
  }

  profileToDisplay() {
    if (this.authService.getType() === 'admin' || localStorage.getItem('idAdmin')) {
      this.router.navigate(['/admin/profile']);
    } else if (this.authService.getType() === 'association' || localStorage.getItem('idAssociation')) {
      this.router.navigate(['/association/profile']);
    } else if (this.authService.getType() === 'benevole' || localStorage.getItem('idBenevole')) {
      this.router.navigate(['/benevole/profile']);
    }
  }

  // nameToDisplay() {
  //   this.name = this.authService.getType();
  //   // console.log('name', this.name);
  //   return this.name;
  // }

}
