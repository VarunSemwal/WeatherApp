import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkyAlertModule } from '@skyux/indicators';
import { HttpClientModule } from '@angular/common/http';

import {SkyThemeService} from '@skyux/theme';
import {
  SkyAppLocaleProvider
} from '@skyux/i18n';
import {
  of as observableOf
} from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SkyIdModule } from '@skyux/core';
import { SkyDatepickerModule } from '@skyux/datetime';
import { SkyInputBoxModule } from '@skyux/forms';
import {
  SkyHelpInlineModule,
  SkyStatusIndicatorModule,
} from '@skyux/indicators';
import { SkyFluidGridModule } from '@skyux/layout';
import { SkyValidators } from '@skyux/validation';
import { SkyCardModule,SkyBoxModule  } from '@skyux/layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkyAlertModule,
    HttpClientModule,
    SkyCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SkyBoxModule,
    FormsModule,
    ReactiveFormsModule,
    SkyDatepickerModule,
    SkyFluidGridModule,
    SkyHelpInlineModule,
    SkyIdModule,
    SkyInputBoxModule,
    SkyStatusIndicatorModule,
  ],
  providers: [SkyThemeService,
    {
      provide: SkyAppLocaleProvider,
      useValue: {
        getLocaleInfo: () => observableOf({
          locale: 'en-US'
        })
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
