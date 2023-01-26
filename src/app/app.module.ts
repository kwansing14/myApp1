import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CalculatorstuffComponent } from './calculatorstuff/calculatorstuff.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, ItemComponent, CalculatorstuffComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
