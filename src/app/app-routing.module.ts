import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatComponent } from './chat/chat.component';
import { EmailComponent } from './email/email.component';
import { NotificationComponent } from './notification/notification.component';
import { AnalyticComponent } from './analytic/analytic.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
    { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
    { path: 'email', component: EmailComponent, canActivate: [AuthGuard] },
    { path: 'analytic', component: AnalyticComponent, canActivate: [AuthGuard] },
    { path: 'notification', component: NotificationComponent, canActivate: [AuthGuard] }
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {

}
