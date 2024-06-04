import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NousPage } from './nous.page';

describe('NousPage', () => {
  let component: NousPage;
  let fixture: ComponentFixture<NousPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
