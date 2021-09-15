import { Component } from '@angular/core';
import { Appointment } from './classes/Appointment';
import { Observation } from './classes/Observation';
import { Patient } from './classes/Patient';
import { RestserviceService } from './restservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'JesusScript';
  patient: Patient;
  listeConsultations: Appointment[];
  observations: Observation[];

  public profilDisplay: boolean = true;
  public consultationDisplay: boolean = false;
  public observationDisplay: boolean = false;

  constructor(private service: RestserviceService) {
    this.service.getPatient().then((patient) => {
      console.log(patient);
      this.patient = patient;

      this.service.getListeConsultations(this.patient.id).then((liste) => {
        console.log(liste);
        this.listeConsultations = liste;
      });

      this.service.getObservations(this.patient.id).then((observations) => {
        console.log(observations);
        this.observations = observations;
      });
    });
  }

  showProfil() {
    this.profilDisplay = true;
    this.consultationDisplay = false;
    this.observationDisplay = false;
  }

  showConsultations() {
    this.profilDisplay = false;
    this.consultationDisplay = true;
    this.observationDisplay = false;
  }

  showObservations() {
    this.profilDisplay = false;
    this.consultationDisplay = false;
    this.observationDisplay = true;
  }

  submitAppoitment(appointment: Appointment) {
    this.service.postAppointment(appointment);
  }

  submitObservation(observation: Observation) {
    this.observations.push(observation);
    this.service.postObservation(observation);
  }

  onDeleteObservation(observation: Observation) {
    console.log('deleteObservation', observation);
    this.service.deleteObservation(observation.id);
    this.observations.splice(
      this.observations.findIndex((obj) => {
        return obj.id == observation.id;
      }, 1)
    );
  }
}
