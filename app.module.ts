import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAssetComponent,
    ViewAssetComponent,
    UpdateAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
