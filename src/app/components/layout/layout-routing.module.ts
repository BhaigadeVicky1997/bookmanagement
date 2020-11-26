import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

//Local imports
import { HomeComponent } from './home/home.component';

const routes:Routes = [
    { path: 'home', component: HomeComponent },

]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})

export class LayoutRoutingModule{}