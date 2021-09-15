export class Coding {
  system: String;
  version: String;
  code: String;
  display: String;
  userSelected: boolean;

  constructor(code: String, display: String) {
    this.system = 'http://loinc.org';
    this.code = code;
    this.display = display;
  }
}
