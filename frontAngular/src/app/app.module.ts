import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './button/button.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { FormProductComponent } from './form-product/form-product.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormButtonComponent } from './form-button/form-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    ButtonComponent,
    TravelListComponent,
    ProductListComponent,
    FormProductComponent,
    FormFieldComponent,
    FormButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
