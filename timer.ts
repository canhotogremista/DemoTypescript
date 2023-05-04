export class Timer {
  intervalo = null;
  contador: number = 0;
  elemento: HTMLElement = null;
  status: number = 0;

  constructor(e: HTMLElement) {
    this.elemento = e;
  }

  start() {
    if (this.status == 0) {
      this.contador = 0;
      this.elemento.innerHTML = `${this.contador}s`;
      this.status = 1;
      this.intervalo = setInterval(() => {
        this.contador++;
        this.elemento.innerHTML = `${this.contador}s`;
      }, 1000);
    } else {
      console.log('já em andamento');
    }
  }
  continue() {
    if (this.status == 0) {
      this.status = 1;
      this.intervalo = setInterval(() => {
        this.contador++;
        this.elemento.innerHTML = `${this.contador}s`;
      }, 1000);
    } else {
      console.log('já em andamento');
    }
  }
  stop() {
    console.log('parou');
    this.status = 0;
    clearInterval(this.intervalo);
  }
}
