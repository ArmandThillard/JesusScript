export class Actor {
  reference: string;
  display: string;

  constructor(reference, display?) {
    this.reference = reference;
    if (display) {
      this.display = display;
    }
  }
}
