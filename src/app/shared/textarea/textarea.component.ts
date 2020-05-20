import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true,
};

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
    providers: [VALUE_ACCESSOR],
})
export class TextareaComponent implements ControlValueAccessor {
    @Input() label: string = '';
    public isOnFocus: boolean = false;

    private _value: string = '';
    onChange: any;
    onTouch: any;

    public set value(v: string) {
        this._value = v;
    }

    public get value(): string {
        return this._value;
    }

    public onInputFocus() {
        this.isOnFocus = true;
        this.onChange(this.value);
    }

    public onInputChange() {
        this.onChange(this.value);
    }

    public onInputBlur() {
        this.isOnFocus = false;
        this.onTouch();
    }

    writeValue(obj: any): void {
        this.value = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
}
