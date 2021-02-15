import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { CartComponent } from "./cart/cart.component";
import { ProductsComponent } from "./products/products.component";

import { Routes, RouterModule } from "@angular/router";

import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducer";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/products",
    pathMatch: "full",
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "product/:id",
    component: ProductComponent,
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ cart: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
