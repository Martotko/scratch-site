import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { InputDefaultModule } from '../shared/input-default/input-default.module';
import { SquareIconModule } from '../shared/square-icon/square-icon.module';
import { MemberPreviewModule } from '../shared/member-preview/member-preview.module';
import { SeparatorModule } from '../shared/separator/separator.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        InputDefaultModule,
        SquareIconModule,
        MemberPreviewModule,
        SeparatorModule,
    ],
    declarations: [HomeComponent],
})
export class HomeModule {}
