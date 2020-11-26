import { NgModule } from '@angular/core';

//Import all components
import { HeaderComponent } from './components/commonLayout/header/header.component';
import { FooterComponent } from './components/commonLayout/footer/footer.component';


@NgModule({

    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class ComponentModule { }
