import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksCharacteristicsComponent } from './trucks-characteristics.component';

describe('TrucksCharacteristicsComponent', () => {
  let component: TrucksCharacteristicsComponent;
  let fixture: ComponentFixture<TrucksCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrucksCharacteristicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrucksCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
