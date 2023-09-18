import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { FilterTabComponent } from './filter-tab/filter-tab.component';
import { ItemListsComponent } from './item-lists/item-lists.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BagCartComponent } from './bag-cart/bag-cart.component';
import { PolaroidComponent } from './polaroid/polaroid.component';
import { PolaroidListComponent } from './polaroid-list/polaroid-list.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListsComponent,
    MainContentComponent,
    FilterTabComponent,
    ShoppingCartComponent,
    BagCartComponent,
    PolaroidComponent,
    PolaroidListComponent,
    PriceCardComponent,
    CheckOutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
