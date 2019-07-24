import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NekoHomeComponent } from './neko-home.component';

describe('NekoHomeComponent', () => {
  let component: NekoHomeComponent;
  let fixture: ComponentFixture<NekoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NekoHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NekoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
