//Angular Imports
import { NgModule } from '@angular/core';

//Local Components Imports
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

//Local Module Imports
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({

    declarations: [
      LoginComponent,
      SignupComponent
    ],
    imports: [
        AuthRoutingModule
    ],
    exports: [],

})
export class AuthModule {}