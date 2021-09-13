import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfosPatientComponent } from './infos-patient/infos-patient.component';
import { ObservationComponent } from './observation/observation.component';
import { ConsultationComponent } from './consultation/consultation.component';

@NgModule({
  declarations: [
    AppComponent,
    InfosPatientComponent,
    ObservationComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
