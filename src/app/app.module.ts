import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { FilterPipe } from './pipe/filter.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModule } from './features/product/product.module';
import { FilterProductPipe } from './pipe/filter-product.pipe';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { TestComponent } from './components/test/test.component';
import { CategoryComponent } from './components/category/category.component';
import { ValidationMessagesComponent } from './shared/validation-messages/validation-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    FilterPipe,
    NotFoundComponent,
    FormCategoryComponent,
    CategoryComponent,
    ValidationMessagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,TestComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
