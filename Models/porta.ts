export default class PortaModel {
  private numero: number; // Número da porta
  private temPresente: boolean; // Indica se a porta tem um presente
  private selecionada: boolean; // Indica se a porta está selecionada
  private aberta: boolean; // Indica se a porta está aberta

  // Construtor da classe PortaModel
  constructor(
    numero: number,
    temPresente = false,
    selecionada = false,
    aberta = false
  ) {
    this.numero = numero;
    this.temPresente = temPresente;
    this.selecionada = selecionada;
    this.aberta = aberta;
      }

  // Métodos getters para acessar as propriedades da porta
  get getnumero() {
    return this.numero;
  }

  get getTemPresente() {
    return this.temPresente;
  }

  get getSelecionada() {
    return this.selecionada;
  }

  get getAberta() {
    return this.aberta;
  }

  get getFechada() {
    return !this.aberta
  }

  // Método para desselecionar a porta
  desselecionar() {
    const selecionada = false;
    return new PortaModel(
      this.numero,
      this.temPresente,
      selecionada,
      this.aberta
    );
  }

  // Método para alternar a seleção da porta
  alternarSelecao() {
    const selecionada = !this.selecionada;
    return new PortaModel(
      this.numero,
      this.temPresente,
      selecionada,
      this.aberta
    );
  }

  // Método para abrir a porta
  abrir() {
    const aberta = true;
    return new PortaModel(
      this.numero,
      this.temPresente,
      this.selecionada,
      aberta
    );
  }
}
