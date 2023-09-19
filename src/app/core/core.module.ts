import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorHandlingComponent } from './components/error-pages/error-handling/error-handling.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorHandlingComponent, LayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, LayoutComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('A CoreModule-t csak az AppModule-ba importáld!');
    }
  }
}
