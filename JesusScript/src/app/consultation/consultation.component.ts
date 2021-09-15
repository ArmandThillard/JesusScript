import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Appointment } from '../classes/Appointment';
import { Validators } from '@angular/forms';
import { Period } from '../classes/Period';
import { Patient } from '../classes/Patient';
import { Actor } from '../classes/Actor';
import { Participant } from '../classes/Participant';


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  _listeConsultations : Appointment[];
  _patient : Patient;

  checkoutForm = this.formBuilder.group({
    description: ['', Validators.required],
    comment: ['', Validators.required],
    day: ['', Validators.required],
    start: ['', Validators.required],
    end: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
  }

  get listeConsultations(){
    return this._listeConsultations;
  }

  @Input()
  set listeConsultations(value: Appointment[]){
    this._listeConsultations = value;
  }

  @Input()
  set patient(value: Patient){
    this._patient = value;
  }

  @Output()
  notifyAppointment : EventEmitter<Appointment> = new EventEmitter<Appointment>();

  onAppointmentSubmit(): Appointment {

    console.log(this.checkoutForm);
    var f = this.checkoutForm.value;
    var appointment = new Appointment;

    appointment.description = f.description;
    appointment.comment = f.comment;
    appointment.start = this.dayAndTimeStringsToDate(f.day, f.start);
    appointment.end = this.dayAndTimeStringsToDate(f.day, f.end);
    appointment.minutesDuration = this.msToMinutes(+appointment.end - +appointment.start);

    appointment.created = new Date();
    appointment.status = "proposed";

    var participant = [];
    var patientActor = new Actor("Patient/612e0350a5b46400122dx508", "Jesus SCRIPT");
    var patient = new Participant(patientActor, "required", "accepted");
    var medActor = new Actor("Practitioner/613f4b25a5b46400122cf50f","Dr MARTIN Pierre");
    var medecin = new Participant(medActor, "required", "accepted");

    participant.push(patient);
    participant.push(medecin);
    appointment.participant = participant;

    console.log(appointment);

    this.notifyAppointment.emit(appointment);

    return appointment;

  }

  dayAndTimeStringsToDate(day : string, time : string): Date{

    var yy = new Date(day).getFullYear();
    const mm = new Date(day).getMonth() + 1;
    const dd = new Date(day).getDate();

    var dateTime = new Date(mm + '-' + dd + '-' + yy);

    var hours : number = +time.split(":")[0];
    var minutes : number = +time.split(":")[1];
  
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);

    console.log(dateTime);

    return dateTime; 

  }

  msToMinutes(duration) : number {
    
    return Math.floor((duration / (1000 * 60)) % 60);

  }

  getParticipants(consultation : Appointment) : string{

    var str = "";
    for ( var participant of consultation.participant ){
      if(participant.actor){
        //console.log("participant:", participant);
        var name = participant.actor.display;
        str += name + ", ";
      }
    }

    return str;

  }

}
