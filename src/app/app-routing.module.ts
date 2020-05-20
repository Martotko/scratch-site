import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        pathMatch: 'full'
    },
    {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
