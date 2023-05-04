export class Timer {
  intervalo = null;
  contador: number = 0;
  elemento: HTMLElement = null;

  constructor(e: HTMLElement) {
    this.elemento = e;
  }

  start() {
    this.contador = 0;
    this.elemento.innerHTML = `${this.contador}s`;
    this.intervalo = setInterval(() => {
      this.contador++;
      this.elemento.innerHTML = `${this.contador}s`;
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalo);
  }
}
