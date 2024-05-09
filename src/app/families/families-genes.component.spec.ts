import { ComponentFixture, TestBed } from '@angular/core/testing';

import { familiesGenesComponent } from './families-genes.component';

describe('FamiliesGenesComponent', () => {
  let component: familiesGenesComponent;
  let fixture: ComponentFixture<familiesGenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [familiesGenesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(familiesGenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
