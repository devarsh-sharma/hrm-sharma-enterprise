import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RightsService } from 'src/app/core/services/rights.service';
import { ThemeService } from 'src/app/core/services/theme.service';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  right: string;
}

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {

  isDarkTheme = false;

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard/home',
      right: 'VIEW_DASHBOARD'
    },
    {
      label: 'Employees',
      icon: 'people',
      route: '/dashboard/employees',
      right: 'VIEW_EMPLOYEE'
    },
    {
      label: 'Leave',
      icon: 'event',
      route: '/dashboard/leave',
      right: 'VIEW_LEAVE'
    },
    {
      label: 'Organisation Chart',
      icon: 'account_tree',
      route: '/dashboard/org-chart',
      right: 'VIEW_ORG'
    },
    {
      label: 'Security',
      icon: 'security',
      route: '/dashboard/security',
      right: 'MANAGE_RIGHTS'
    }
  ];

  constructor(
    private themeService: ThemeService,
    public rightsService: RightsService
  ) {}

  ngOnInit(): void {
    this.themeService.initTheme();
    this.isDarkTheme = this.themeService.isDark();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setTheme(this.isDarkTheme ? 'dark' : 'light');
  }

  trackByLabel(_: number, item: MenuItem): string {
    return item.label;
  }
}
