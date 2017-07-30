import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {RoutingModule} from "./app.routes";
import {TodoModule} from "./todo/todo.module";
import {AuthService} from "./core/auth.service";
import {MyOwnCustomMaterialModule} from './vendor/materials/myOwnCustomMaterial.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    NoopAnimationsModule,
    MyOwnCustomMaterialModule,
    TodoModule
  ],
  providers: [
    {provide: 'auth', useClass: AuthService},
    {provide: 'BASE_URL', useValue: 'http://www.sina.com.cn'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
