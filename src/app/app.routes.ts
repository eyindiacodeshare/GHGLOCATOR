import { Routes } from '@angular/router';
import { GhgLocatorComponent } from './ghg-locator/ghg-locator.component';
import { ReviewToolHomeComponent } from './review-tool-home/review-tool-home.component';

export const routes: Routes = [
    { path: '', redirectTo:'review-tool-home',pathMatch:'full'},   
    { path: 'review-tool-home', component: ReviewToolHomeComponent},
    { path: 'ghg-locator', component: GhgLocatorComponent}
];
