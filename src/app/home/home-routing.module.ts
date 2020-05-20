import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const homeRoutingRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
    imports: [RouterModule.forChild(homeRoutingRoutes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
