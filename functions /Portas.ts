import PortaModel from "../Models/porta"; // Importa o modelo PortaModel que representa o estado e comportamento de uma porta.

export function criarPortas(
  qtde: number, // Quantidade total de portas a serem criadas.
  portaComPresente: number // Número da porta que deve conter um presente.
): PortaModel[] {
  // Cria um array de objetos PortaModel com base na quantidade fornecida e define qual porta terá o presente.
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1; // Define o número da porta atual (começa em 1).
    const temPresente = numero === portaComPresente; // Verifica se a porta atual é a que deve ter o presente.
    return new PortaModel(numero, temPresente); // Cria uma nova instância de PortaModel com o número e a flag de presente.
  });
}

export function atualizarPortas(
  portas: PortaModel[], // Array atual de portas.
  portaModificada: PortaModel // Instância da porta que foi modificada.
) {
  // Atualiza o estado das portas com base na porta modificada.
  return portas.map((portaAtual) => {
    const igualAModificada = portaAtual.getnumero === portaModificada.getnumero; // Verifica se a porta atual é a mesma que a modificada.

    if (igualAModificada) {
      return portaModificada; // Retorna a porta modificada se for a mesma.
    } else {
      // Se a porta não foi modificada:
      return portaModificada.getAberta
        ? portaAtual // Se a porta modificada está aberta, mantém a porta atual como está.
        : portaAtual.desselecionar(); // Caso contrário, desmarca a porta atual.
    }
  });
}
