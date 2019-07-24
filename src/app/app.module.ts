import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MAT_MENU_DEFAULT_OPTIONS, MatMenuDefaultOptions } from '@angular/material/menu';
import { AppService } from './services/app.service';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
    AppService,
    {
      provide: MAT_MENU_DEFAULT_OPTIONS,
      useValue: <MatMenuDefaultOptions>{
        overlapTrigger: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private appService: AppService) {
    this.appService.darkMode$.subscribe(x => {
      const htmlDoc = document.querySelector('html');
      if (x) {
        htmlDoc.classList.add('dark');
      } else {
        htmlDoc.classList.remove('dark');
      }
    });
  }
}
