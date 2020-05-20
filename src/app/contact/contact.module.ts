import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { InputDefaultModule } from '../shared/input-default/input-default.module';
import { TextareaModule } from '../shared/textarea/textarea.module';
import { SeparatorModule } from '../shared/separator/separator.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonFullWidthModule } from '../shared/button-full-width/button-full-width.module';
import { ValidationModule } from '../shared/validation/validation.module';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        InputDefaultModule,
        TextareaModule,
        SeparatorModule,
        ReactiveFormsModule,
        ButtonFullWidthModule,
        ValidationModule
    ],
    declarations: [ContactComponent],
})
export class ContactModule {}
