import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovoLivroComponent } from './novolivro/novolivro.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoLivroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
