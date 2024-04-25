import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaConcursantesComponent } from './vista-concursantes.component';

describe('VistaConcursantesComponent', () => {
  let component: VistaConcursantesComponent;
  let fixture: ComponentFixture<VistaConcursantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaConcursantesComponent]
    });
    fixture = TestBed.createComponent(VistaConcursantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
