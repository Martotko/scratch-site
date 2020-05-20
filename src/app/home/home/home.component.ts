import { Component } from '@angular/core';
import { TeamMember } from 'src/app/shared/member-preview/member-preview.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public teamMembers: TeamMember[] = [
        {
            id: '1',
            imgUrl: 'assets/images/martin.jpg',
            firstName: 'Martin',
            lastName: 'Georgiev',
            profession: 'Front End Developer',
            linkedIn: 'https://www.linkedin.com/in/martin-georgiev-797319b9/',
        },
    ];
}
``;
