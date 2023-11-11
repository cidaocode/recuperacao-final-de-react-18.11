//estilização
import "./style.css";

//componentes
import CardBolo from "../../components/CardBolo";

//api
import api from "../../utils/api";

//hooks
import { useEffect, useState } from "react";


function ListaBolo() {
    // js
    //const listaBolo = [];
    // react
    // bolos => ver o valor
    // setBolos => atribui um novo valor
    // useStates []=> o tipo do valor que pode receber
    // ([]) => e o valor inicial

    // doi jeitos js e react bolos = [1, 2, 3] ou setBolos ([1, 2, 3])
    // useEffect e acionado quando o componente e inicializadobe modificado

    const [bolos, setBolos] = useState<any[]>([]);

    function listarBolos() {
        // http://localhost:3000/bolos
        api.get("bolos")

            .then((response) => {
                // then e quando api da retorno positivo
                setBolos(response.data);

                console.log(response.data);
            })
            .catch((error) => {
                // then e quando api da retorno negativo
                console.log(error);
            })

    }

    // ou seja bolos atualiza e setBolos localiza

    useEffect(() => {
        listarBolos();

    }, [
        // monitora
        // e acionada quando meu componente inicializado

    ]);

    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}


            </section>
        </main>
    );
};

export default ListaBolo;