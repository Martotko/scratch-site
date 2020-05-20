import { Component, Input } from '@angular/core';

export interface TeamMember {
    id: string;
    imgUrl: string;
    firstName: string;
    lastName: string;
    profession: string;
    linkedIn: string;
}

@Component({
    selector: 'app-member-preview',
    templateUrl: './member-preview.component.html',
    styleUrls: ['./member-preview.component.scss'],
})
export class MemberPreviewComponent {
    @Input() memberInfo: TeamMember;
}
