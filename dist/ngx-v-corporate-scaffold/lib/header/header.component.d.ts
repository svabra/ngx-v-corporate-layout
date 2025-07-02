import * as i0 from "@angular/core";
type LogoType = 'compact' | 'extended';
interface MenuItem {
    label: string;
    url: string;
    subMenu?: MenuItem[];
}
export declare class HeaderComponent {
    appName?: string;
    tagline?: string;
    catchyTagline?: string;
    links: MenuItem[];
    metaLinks: {
        label: string;
        url: string;
    }[];
    logoType: LogoType;
    isAppNameHovered: boolean;
    openedMenuIndex: number | null;
    onMenuClick(event: Event, idx: number, hasSubmenu: boolean): void;
    closeSubmenu(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "corp-header", never, { "appName": { "alias": "appName"; "required": false; }; "tagline": { "alias": "tagline"; "required": false; }; "catchyTagline": { "alias": "catchyTagline"; "required": false; }; "links": { "alias": "links"; "required": false; }; "metaLinks": { "alias": "metaLinks"; "required": false; }; "logoType": { "alias": "logoType"; "required": false; }; }, {}, never, ["[meta-nav-shortcuts]"], true, never>;
}
export {};
