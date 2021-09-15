import { Component } from '@angular/core';
import { Appointment } from './classes/Appointment';
import { Patient } from './classes/Patient';
import { RestserviceService } from './restservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'JesusScript';
  patient: Patient;
  listeConsultations: Appointment[];

  public profilDisplay:boolean =false;

  _showConsultations: boolean = false;

  constructor(private service: RestserviceService) {
    this.service.getPatient().then(
      patient => {
        console.log(patient);
        this.patient = patient;

        this.service.getListeConsultations(this.patient.id).then(
          liste => {
            console.log(liste);
            this.listeConsultations = liste;
          }
        );
      }
    );
  }

  public get showConsultations() {
    return this._showConsultations;
  }

  public set showConsultations(value: boolean) {
    this._showConsultations = value;
  }

  showProfil(){
      this.profilDisplay=true;
    }
}
