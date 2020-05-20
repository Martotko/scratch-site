import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TextareaComponent } from './textarea.component';
import { FormsModule } from '@angular/forms';

describe('TextareaComponent', () => {
    let component: TextareaComponent;
    let fixture: ComponentFixture<TextareaComponent>;
    const testString = 'Test';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TextareaComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TextareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize with correct value', () => {
        // Arrange
        // Act
        component.writeValue(testString);
        // Assert
        expect(component.value).toBe(testString);
    });

    it('onInputFocus should change focus and detect change', () => {
        // Arrange
        component.onChange = jasmine.createSpy('onChange');
        component.value = testString;
        // Act
        component.onInputFocus();
        // Assert
        expect(component.isOnFocus).toBeTruthy();
        expect(component.onChange).toHaveBeenCalledWith(testString);
    });
    it('onInputBlur should change focus and detect touch', () => {
        // Arrange
        component.onTouch = jasmine.createSpy('onTouch');
        component.value = testString;
        // Act
        component.onInputBlur();
        // Assert
        expect(component.isOnFocus).toBeFalsy();
        expect(component.onTouch).toHaveBeenCalled();
    });
    it('onInputChange should detect change', () => {
        // Arrange
        component.onChange = jasmine.createSpy('onChange');
        component.value = testString;
        // Act
        component.onInputChange();
        // Assert
        expect(component.onChange).toHaveBeenCalledWith(testString);
    });
});
