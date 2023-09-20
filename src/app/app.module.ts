import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarbonFootprintComponent } from './component/carbon-footprint/carbon-footprint.component';
import { CarbonFootprintFormComponent } from './component/carbon-footprint-form/carbon-footprint-form.component';
import { CarbonFootprintResultComponent } from './component/carbon-footprint-result/carbon-footprint-result.component';
import {CarbonFootprintComputeService} from "./service/carbon-footprint-compute.service";
import { AuthComponent } from './component/auth/auth.component';
import {FormsModule} from "@angular/forms";
import { MenuComponent } from './component/header/menu/menu.component';
import { UpdateComponent } from './component/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarbonFootprintComponent,
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    AuthComponent,
    MenuComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CarbonFootprintComputeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
