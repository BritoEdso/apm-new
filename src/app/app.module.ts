import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe], //components must be declared here
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent], //component that is run on start
})
export class AppModule {}
