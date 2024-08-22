import React from "react";
import PortaModel from "../Models/porta";
import styles from "../src/styles/Porta.module.css";
import Presente from "./Presente";

// Interface que define os props esperados pelo componente Porta
interface PortaProps {
  value: PortaModel; // Objeto PortaModel que representa o estado da porta
  onChange: (novaPorta: PortaModel) => void; // Função para atualizar o estado da porta
}

// Componente funcional Porta
export default function Porta(props: PortaProps) {
  const porta = props.value; // Obtém o objeto PortaModel a partir dos props
  // Determina se a porta está selecionada e não está aberta para aplicar a classe de estilo correspondente
  const selecionada =
    porta.getSelecionada && !porta.getAberta ? styles.selecionada : "";

  // Função para alternar a seleção da porta
  const alternarSelecao = (e: any) => {
    props.onChange(porta.alternarSelecao());
  };

  // Função para abrir a porta
  const abrir = (e) => {
    e.stopPropagation(); // Impede a propagação do evento para não acionar a seleção ao clicar na maçaneta
    props.onChange(porta.abrir());
  };

  // Função que renderiza o conteúdo da porta
  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.getnumero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.getFechada ? (
          renderizarPorta()
        ) : porta.getTemPresente ? (
          <Presente />
        ) : (
          false
        )}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
