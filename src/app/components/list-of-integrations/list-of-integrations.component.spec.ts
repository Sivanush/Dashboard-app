import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfIntegrationsComponent } from './list-of-integrations.component';

describe('ListOfIntegrationsComponent', () => {
  let component: ListOfIntegrationsComponent;
  let fixture: ComponentFixture<ListOfIntegrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfIntegrationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
