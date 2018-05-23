import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MenuComponent } from './pages/menu/menu.component';
import { DesktopComponent } from './pages/desktop/desktop.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';

const rout: Routes = [
  {path: 'desktop', component: DesktopComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DesktopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
