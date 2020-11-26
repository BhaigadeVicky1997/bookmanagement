//Angular Imports
import { NgModule } from '@angular/core';

//Local Components Imports
import { HomeComponent } from './home/home.component';

//Local Module Imports
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({

    declarations: [
        HomeComponent
    ],
    imports: [
        LayoutRoutingModule
    ],
    exports: [],

})
export class LayoutModule {}