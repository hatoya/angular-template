import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalLayoutComponent } from './modal-layout.component';

describe('ModalLayoutComponent', () => {
  let component: ModalLayoutComponent;
  let fixture: ComponentFixture<ModalLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
