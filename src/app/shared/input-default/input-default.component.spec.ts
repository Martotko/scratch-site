import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputDefaultComponent } from './input-default.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('InputDefaultComponent', () => {
    let component: InputDefaultComponent;
    let fixture: ComponentFixture<InputDefaultComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [InputDefaultComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputDefaultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
