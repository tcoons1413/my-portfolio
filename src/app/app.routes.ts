import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Projects'   
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact'    
    }
];
