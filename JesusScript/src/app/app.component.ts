import { Component } from '@angular/core';
import { Patient } from './classes/Patient';
import { RestserviceService } from './restservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JesusScript';
  patient : Patient;
  constructor(private service: RestserviceService){
    console.log();

    service.getPatient().then(
      patient => {
        console.log(patient);
        this.patient = patient;
      }
    );

  }
}
