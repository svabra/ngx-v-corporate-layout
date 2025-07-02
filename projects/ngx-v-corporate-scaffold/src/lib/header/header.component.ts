import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

type LogoType = 'compact' | 'extended';

interface MenuItem {
  label: string;
  url: string;
  subMenu?: MenuItem[];
}

@Component({
  selector: 'corp-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Input() appName?: string;
  @Input() tagline?: string;
  @Input() catchyTagline?: string;
  @Input() links: MenuItem[] = [];
  @Input() metaLinks: { label: string; url: string }[] = [];
  @Input() logoType: LogoType = 'extended';

  isAppNameHovered = false;
  openedMenuIndex: number | null = null;

  onMenuClick(event: Event, idx: number, hasSubmenu: boolean): void {
    if (hasSubmenu) {
      event.preventDefault();
      this.openedMenuIndex = this.openedMenuIndex === idx ? null : idx;
    } else {
      this.closeSubmenu();
    }
  }

  closeSubmenu(): void {
    this.openedMenuIndex = null;
  }

}
