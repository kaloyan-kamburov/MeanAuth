//routes
import { Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { ProfileComponent } from '../pages/profile/profile.component';

import { AuthGuard } from '../common/auth.guard';

export class AppSettings {
    public static API_PATH = 'http://localhost:3000'
    public static SITE_PATH = 'http://localhost:4200'
    
    public static ROUTES: Routes = [
        { 
            path: '', 
            component: HomeComponent, 
            data: {
                name: 'Home',
                publicPage: true
            } 
        },
        { 
            path: 'profile', 
            component: ProfileComponent, 
            canActivate: [AuthGuard],
            data: {
                name: 'Profile',
                publicPage: false
            } 
        }
    ]
}