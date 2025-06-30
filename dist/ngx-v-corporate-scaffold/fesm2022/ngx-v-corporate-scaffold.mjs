import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

class NgxVCorporateScaffoldService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: NgxVCorporateScaffoldService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: NgxVCorporateScaffoldService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: NgxVCorporateScaffoldService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NgxVCorporateScaffoldComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: NgxVCorporateScaffoldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: NgxVCorporateScaffoldComponent, isStandalone: true, selector: "corp-ngx-v-corporate-scaffold", ngImport: i0, template: `
    <p>
      ngx-v-corporate-scaffold works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: NgxVCorporateScaffoldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'corp-ngx-v-corporate-scaffold', standalone: true, imports: [], template: `
    <p>
      ngx-v-corporate-scaffold works!
    </p>
  ` }]
        }] });

class HeaderComponent {
    appName;
    tagline;
    catchyTagline;
    links = [];
    metaLinks = [];
    logoType = 'extended';
    isAppNameHovered = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: HeaderComponent, isStandalone: true, selector: "corp-header", inputs: { appName: "appName", tagline: "tagline", catchyTagline: "catchyTagline", links: "links", metaLinks: "metaLinks", logoType: "logoType" }, ngImport: i0, template: "<header class=\"header\">\r\n  <div class=\"meta-nav\">\r\n    <div class=\"meta-nav-links\">\r\n      @if (metaLinks && metaLinks.length > 0) {\r\n      @for (link of metaLinks; track link.label) {\r\n      <a [routerLink]=\"link.url\" class=\"meta-nav-link\">{{ link.label }}</a>\r\n      }\r\n      }\r\n    </div>\r\n    <div class=\"meta-nav-shortcuts\">\r\n      <ng-content select=\"[meta-nav-shortcuts]\"></ng-content>\r\n      <!-- The implementing app can add whatever it wants. -->\r\n    </div>\r\n  </div>\r\n  <div class=\"logo-menu-container\">\r\n    <div class=\"logo-tagline\">\r\n      <img class=\"logo-img\" [ngClass]=\"{ show: logoType === 'compact', hide: logoType !== 'compact' }\"\r\n        src=\"/assets/ngx-v-corporate-scaffold/logos/Armee_Schild_schwarz_RGB.png\" alt=\"Armed Forces (compact logo)\" />\r\n      <img class=\"logo-img\" [ngClass]=\"{ show: logoType === 'extended', hide: logoType !== 'extended' }\"\r\n        src=\"/assets/ngx-v-corporate-scaffold/logos/Armee_Logo_EN_neg_RGB.png\" alt=\"Armed Forces (extended logo)\" />\r\n\r\n    </div>\r\n    <nav class=\"header-links\" aria-label=\"Main navigation\">\r\n      <ul>\r\n        @if (links && links.length > 0) {\r\n        @for (link of links; track link.label) {\r\n        <li>\r\n          <a [routerLink]=\"link.url\" class=\"header-link\">{{ link.label }}</a>\r\n        </li>\r\n        }\r\n        } @else {\r\n        <li>There are no links :-)</li>\r\n        }\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  @if (appName) {\r\n  <div class=\"appName-tagline\">\r\n    <div class=\"appName\" (mouseenter)=\"isAppNameHovered = true\" (mouseleave)=\"isAppNameHovered = false\">\r\n      {{ appName }}\r\n    </div>\r\n    @if (tagline) {\r\n    <span class=\"tagline-wrapper\">\r\n      @if (catchyTagline && isAppNameHovered) {\r\n      <span class=\"tagline tagline-fade\">{{ catchyTagline }}</span>\r\n      } @else {\r\n      <span class=\"tagline tagline-fade\">{{ tagline }}</span>\r\n      }\r\n    </span>\r\n    }\r\n  </div>\r\n  }\r\n\r\n\r\n\r\n</header>", styles: [":root{--vbs-red: #FF0000;--vbs-black: #000000;--vbs-black-main: #1f1f1f;--vbs-black-70: #4D4D4D;--vbs-black-50: #808080;--vbs-black-25: #BFBFBF;--vbs-black-10: #E5E5E5}.header{position:sticky;top:0;width:100%;background-color:var(--vbs-black-main);border-bottom:1px solid var(--vbs-black-70);z-index:100;display:block;align-items:center;justify-content:space-between;padding:0rem;min-height:56px}.meta-nav{display:flex;justify-content:space-between;align-items:center;background:var(--vbs-black-70);padding:0 2rem;min-height:32px}.meta-nav-links{display:flex;gap:1rem;text-transform:uppercase}.meta-nav-link{color:#fff;font-size:.85em;text-decoration:none;opacity:.85;transition:opacity .2s}.meta-nav-link:hover{opacity:1}.meta-nav-shortcuts{display:flex;gap:.5rem;align-items:center}.meta-nav-shortcuts mat-icon{color:#fff}.logo-menu-container{display:flex;align-items:center;justify-content:space-between;padding:.5rem 2rem}.logo-tagline{display:flex;align-items:center;gap:1rem;padding:.5rem .5rem .5rem 2rem}.logo-img{height:50px}.show{display:block!important}.hide{display:none!important}.header-links{display:flex;gap:1rem}.header-link{text-decoration:none;color:#fff;font-weight:500;padding:.25em .75em;border-radius:5px;transition:background .2s,color .2s}.header-link:hover{background:var(--vbs-black-70);color:var(--vbs-red)}.appName-tagline{padding:.5rem .5rem .6rem 4rem;display:flex;cursor:default}.appName{font-family:Arial,Helvetica,sans-serif;font-size:1rem;color:#fff;font-weight:700;text-transform:uppercase}.tagline-wrapper{display:inline;position:relative;padding-left:.2rem;text-transform:uppercase;color:var(--vbs-black-50)}.tagline{padding-left:.5rem;display:contents;opacity:1;transition:opacity .35s;position:absolute;left:0;top:0;width:100%}.tagline-fade{animation:fadeInTagline .4s}@keyframes fadeInTagline{0%{opacity:0}to{opacity:1}}\n"], dependencies: [{ kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'corp-header', standalone: true, imports: [RouterLink, NgClass], template: "<header class=\"header\">\r\n  <div class=\"meta-nav\">\r\n    <div class=\"meta-nav-links\">\r\n      @if (metaLinks && metaLinks.length > 0) {\r\n      @for (link of metaLinks; track link.label) {\r\n      <a [routerLink]=\"link.url\" class=\"meta-nav-link\">{{ link.label }}</a>\r\n      }\r\n      }\r\n    </div>\r\n    <div class=\"meta-nav-shortcuts\">\r\n      <ng-content select=\"[meta-nav-shortcuts]\"></ng-content>\r\n      <!-- The implementing app can add whatever it wants. -->\r\n    </div>\r\n  </div>\r\n  <div class=\"logo-menu-container\">\r\n    <div class=\"logo-tagline\">\r\n      <img class=\"logo-img\" [ngClass]=\"{ show: logoType === 'compact', hide: logoType !== 'compact' }\"\r\n        src=\"/assets/ngx-v-corporate-scaffold/logos/Armee_Schild_schwarz_RGB.png\" alt=\"Armed Forces (compact logo)\" />\r\n      <img class=\"logo-img\" [ngClass]=\"{ show: logoType === 'extended', hide: logoType !== 'extended' }\"\r\n        src=\"/assets/ngx-v-corporate-scaffold/logos/Armee_Logo_EN_neg_RGB.png\" alt=\"Armed Forces (extended logo)\" />\r\n\r\n    </div>\r\n    <nav class=\"header-links\" aria-label=\"Main navigation\">\r\n      <ul>\r\n        @if (links && links.length > 0) {\r\n        @for (link of links; track link.label) {\r\n        <li>\r\n          <a [routerLink]=\"link.url\" class=\"header-link\">{{ link.label }}</a>\r\n        </li>\r\n        }\r\n        } @else {\r\n        <li>There are no links :-)</li>\r\n        }\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  @if (appName) {\r\n  <div class=\"appName-tagline\">\r\n    <div class=\"appName\" (mouseenter)=\"isAppNameHovered = true\" (mouseleave)=\"isAppNameHovered = false\">\r\n      {{ appName }}\r\n    </div>\r\n    @if (tagline) {\r\n    <span class=\"tagline-wrapper\">\r\n      @if (catchyTagline && isAppNameHovered) {\r\n      <span class=\"tagline tagline-fade\">{{ catchyTagline }}</span>\r\n      } @else {\r\n      <span class=\"tagline tagline-fade\">{{ tagline }}</span>\r\n      }\r\n    </span>\r\n    }\r\n  </div>\r\n  }\r\n\r\n\r\n\r\n</header>", styles: [":root{--vbs-red: #FF0000;--vbs-black: #000000;--vbs-black-main: #1f1f1f;--vbs-black-70: #4D4D4D;--vbs-black-50: #808080;--vbs-black-25: #BFBFBF;--vbs-black-10: #E5E5E5}.header{position:sticky;top:0;width:100%;background-color:var(--vbs-black-main);border-bottom:1px solid var(--vbs-black-70);z-index:100;display:block;align-items:center;justify-content:space-between;padding:0rem;min-height:56px}.meta-nav{display:flex;justify-content:space-between;align-items:center;background:var(--vbs-black-70);padding:0 2rem;min-height:32px}.meta-nav-links{display:flex;gap:1rem;text-transform:uppercase}.meta-nav-link{color:#fff;font-size:.85em;text-decoration:none;opacity:.85;transition:opacity .2s}.meta-nav-link:hover{opacity:1}.meta-nav-shortcuts{display:flex;gap:.5rem;align-items:center}.meta-nav-shortcuts mat-icon{color:#fff}.logo-menu-container{display:flex;align-items:center;justify-content:space-between;padding:.5rem 2rem}.logo-tagline{display:flex;align-items:center;gap:1rem;padding:.5rem .5rem .5rem 2rem}.logo-img{height:50px}.show{display:block!important}.hide{display:none!important}.header-links{display:flex;gap:1rem}.header-link{text-decoration:none;color:#fff;font-weight:500;padding:.25em .75em;border-radius:5px;transition:background .2s,color .2s}.header-link:hover{background:var(--vbs-black-70);color:var(--vbs-red)}.appName-tagline{padding:.5rem .5rem .6rem 4rem;display:flex;cursor:default}.appName{font-family:Arial,Helvetica,sans-serif;font-size:1rem;color:#fff;font-weight:700;text-transform:uppercase}.tagline-wrapper{display:inline;position:relative;padding-left:.2rem;text-transform:uppercase;color:var(--vbs-black-50)}.tagline{padding-left:.5rem;display:contents;opacity:1;transition:opacity .35s;position:absolute;left:0;top:0;width:100%}.tagline-fade{animation:fadeInTagline .4s}@keyframes fadeInTagline{0%{opacity:0}to{opacity:1}}\n"] }]
        }], propDecorators: { appName: [{
                type: Input
            }], tagline: [{
                type: Input
            }], catchyTagline: [{
                type: Input
            }], links: [{
                type: Input
            }], metaLinks: [{
                type: Input
            }], logoType: [{
                type: Input
            }] } });

/*
 * Public API Surface of ngx-v-corporate-scaffold
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderComponent, NgxVCorporateScaffoldComponent, NgxVCorporateScaffoldService };
//# sourceMappingURL=ngx-v-corporate-scaffold.mjs.map
