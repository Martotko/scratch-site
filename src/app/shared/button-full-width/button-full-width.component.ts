import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button-full-width',
    templateUrl: './button-full-width.component.html',
    styleUrls: ['./button-full-width.component.scss'],
})
export class ButtonFullWidthComponent {
    @Input() label: string;
    @Output() onClick = new EventEmitter();
    public triggerClick() {
        this.onClick.emit();
    }
}
