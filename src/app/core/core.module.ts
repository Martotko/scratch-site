import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FirebaseService } from '../shared/services/firebase.service';

@NgModule({
    declarations: [PageNotFoundComponent, HeaderComponent, FooterComponent],
    imports: [CommonModule, RouterModule],
    exports: [PageNotFoundComponent, HeaderComponent, FooterComponent],
    providers: [FirebaseService]
})
export class CoreModule {}
