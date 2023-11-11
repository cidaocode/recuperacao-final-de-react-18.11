// estilizacao
import "./style.css"

// rotas
import { Link } from "react-router-dom";
// imageges

import imgLogo from "../../assets/img/logo1.png";

function Header() {
    return (
        <header>
            <div className="container header_container">
                <div className="linha1">

                    {/* tag unitaria acrecenta"uama barra/"" */}
                    {/* img sempre precisa ser importadad */}

                    <img src={imgLogo} alt="logo bolos julia" />
                    <nav>
                        <Link to={"#"}>Home</Link>
                        <Link to={"#"}>Cadastrar</Link>
                        <Link to={"#"}>Bolos</Link>
                    </nav>
                </div>
                <div className="linha2">
                    <p>Seja bem vindo ao bolos Júlia</p>
                </div>
            </div>
        </header>

    );
}

//  O componente hearder pode ser chamado em outros lugares pelo exporte (exportacao)
export default Header;

