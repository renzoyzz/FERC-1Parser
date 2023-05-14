import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FercFormParserModule } from './ferc-form-parser/ferc-form-parser.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FercFormParserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
