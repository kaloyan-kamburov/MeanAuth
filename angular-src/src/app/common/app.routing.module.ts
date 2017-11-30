import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSettings } from './app.settings';
import { AuthGuard } from './auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot(AppSettings.ROUTES)
    ],
    exports: [
        RouterModule
    ],
    providers: [AuthGuard],
    declarations: []
})
export class AppRoutingModule { }