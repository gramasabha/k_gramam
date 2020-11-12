import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IvidinganallaComponent } from './ividinganalla.component';

describe('IvidinganallaComponent', () => {
  let component: IvidinganallaComponent;
  let fixture: ComponentFixture<IvidinganallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvidinganallaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IvidinganallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
