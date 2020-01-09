import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SideMenuItemsService } from 'src/app/services/side-menu-items.service';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  headerTitle: any;

  expanded: boolean = false;

  menuItems: any = [];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataService: SideMenuItemsService,
              private router: Router, private titleService: Title ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.headerTitle = this.getTitle(this.router.routerState, this.router.routerState.root).join(' | ');
        this.titleService.setTitle(this.headerTitle);
      }
      );
  }

  OnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.dataService.getJson("side-menu-items").subscribe(items => {
      this.menuItems = items;

    });
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

}
