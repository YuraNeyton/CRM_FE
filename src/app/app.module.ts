import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {ShellModule} from './modules/shell/shell.module';
import {
  CoreModule,
  metaReducers,
  reducers
} from './core';

import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreModule,
    ShellModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
