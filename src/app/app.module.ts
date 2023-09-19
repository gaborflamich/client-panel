import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { CoreModule } from './core/core.module';
import { AppEnvironment, CommonHttpInterceptor } from '@trendency/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
    }),
    CoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonHttpInterceptor,
      multi: true,
    },
    {
      provide: AppEnvironment,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
