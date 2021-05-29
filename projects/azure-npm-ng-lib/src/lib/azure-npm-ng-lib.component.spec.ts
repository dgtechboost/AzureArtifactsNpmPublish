import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureNpmNgLibComponent } from './azure-npm-ng-lib.component';

describe('AzureNpmNgLibComponent', () => {
  let component: AzureNpmNgLibComponent;
  let fixture: ComponentFixture<AzureNpmNgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureNpmNgLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureNpmNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
