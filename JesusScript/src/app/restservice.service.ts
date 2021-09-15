import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from './classes/Patient';
import { Observation } from './classes/Observation';
import { Appointment } from './classes/Appointment';

@Injectable({
  providedIn: 'root',
})
export class RestserviceService {
  _server: string = 'https://fhir.eole-consulting.io/api/';
  _user: string = '';

  constructor(private http: HttpClient) {}

  public get user() {
    return this._user;
  }

  public set user(user: string) {
    this._user = user;
  }

  public get server() {
    return this._server;
  }

  private setHeaders(user: string): HttpHeaders {
    var headers = new HttpHeaders({ 'X-User': user });
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getPatient(): Promise<Patient> {
    return this.http
      .get(this._server + 'patient/612e0350a5b46400122dx508', {
        headers: this.setHeaders(this.user),
      })
      .toPromise()
      .catch(this.handleError);
  }

  getObservations(patientId): Promise<Observation[]> {
    return this.http
      .get(
        this._server + 'observation?subject.reference=Patient/' + patientId,
        {
          headers: this.setHeaders(this.user),
        }
      )
      .toPromise()
      .catch(this.handleError);
  }
  getListeConsultations(id): Promise<Appointment[]> {
    /*if (id == ""){
      return this.http.get(this._server + "appointment",
      { headers: this.setHeaders(this.user)})
      .toPromise().catch(this.handleError);
    }else{*/
    console.log('GET liste consultations');
    return this.http
      .get(
        this._server + 'appointment?participant.actor.reference=Patient/' + id,
        { headers: this.setHeaders(this.user) }
      )
      .toPromise()
      .catch(this.handleError);
    //}
  }
}
