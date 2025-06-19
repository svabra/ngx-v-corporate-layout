import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVCorporateScaffoldComponent } from './ngx-v-corporate-scaffold.component';

describe('NgxVCorporateScaffoldComponent', () => {
  let component: NgxVCorporateScaffoldComponent;
  let fixture: ComponentFixture<NgxVCorporateScaffoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxVCorporateScaffoldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxVCorporateScaffoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
