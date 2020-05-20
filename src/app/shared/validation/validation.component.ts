import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.scss'],
})
export class ValidationComponent {
    @Input() isInvalid: boolean = false;
    @Input() label: string = 'The field is required.';
}
