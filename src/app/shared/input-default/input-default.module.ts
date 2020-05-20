import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDefaultComponent } from './input-default.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [InputDefaultComponent],
    exports: [InputDefaultComponent],
})
export class InputDefaultModule {}
