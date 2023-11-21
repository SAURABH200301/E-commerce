import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { routerPath } from './routerPath';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DetailsComponent } from './components/details/details.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { APISService } from './services/apis.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartService } from './services/cart.service';
import { CartComponent } from './components/cart/cart.component';
import { ToastComponent } from './components/toast/toast.component';
import { RatingComponent } from './components/rating/rating.component';
import { SavedItemComponent } from './components/saved-item/saved-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SideBarComponent,
    DetailsComponent,
    MainComponent,
    NopagefoundComponent,
    ProductCardComponent,
    CartComponent,
    ToastComponent,
    RatingComponent,
    SavedItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerPath)
  ],
  providers: [APISService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
