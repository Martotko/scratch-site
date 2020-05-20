import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { ToastrModule } from 'ngx-toastr';
import { TextareaModule } from 'src/app/shared/textarea/textarea.module';
import { InputDefaultModule } from 'src/app/shared/input-default/input-default.module';
import { SeparatorModule } from 'src/app/shared/separator/separator.module';
import { ButtonFullWidthModule } from 'src/app/shared/button-full-width/button-full-width.module';
import { ValidationModule } from 'src/app/shared/validation/validation.module';

const FirebaseServiceMock = {
    createMessage: {},
};
describe('ContactComponent', () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                ToastrModule.forRoot(),
                InputDefaultModule,
                TextareaModule,
                SeparatorModule,
                ButtonFullWidthModule,
                ValidationModule,
            ],
            declarations: [ContactComponent],
            providers: [{ provide: FirebaseService, useValue: FirebaseServiceMock }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
