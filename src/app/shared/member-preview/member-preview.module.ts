import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberPreviewComponent } from './member-preview.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MemberPreviewComponent],
    exports: [MemberPreviewComponent],
})
export class MemberPreviewModule {}
