import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import Cartao from "../../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../../components/EntradaNumerica";

// Componente funcional principal
export default function Main() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            value={qtdePortas}
            text={"Qtde Portas?"}
            onChange={(novaQtde) => setQtdePortas(novaQtde)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            value={comPresente}
            text={"Porta com presente"}
            onChange={(novaPortaComPresente) =>
              setComPresente(novaPortaComPresente)
            }
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
