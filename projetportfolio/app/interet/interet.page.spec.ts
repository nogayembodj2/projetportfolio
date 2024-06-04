import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InteretPage } from './interet.page';

describe('InteretPage', () => {
  let component: InteretPage;
  let fixture: ComponentFixture<InteretPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InteretPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
