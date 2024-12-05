import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';  // Import HeaderComponent

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  // Declare the HeaderComponent here
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}