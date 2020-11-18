import React, {Component} from 'react';
import "./home.css"
import Diamond from "../../img/Diamond.png"
import door from "../../img/OthersideDoor.png"
import nameeater from "../../img/NameEater.png"
import LifeIsolator from "../../img/LifeIsolator.png"
import Bomber from "../../img/Bomber.png"
import Battery from "../../img/Battery.png"
import Star from "../../img/Star.png"
import Shield from "../../img/Shield.png"
import Turret from "../../img/Turret.png"
import Granade from "../../img/Granade.png"
import Scissor from "../../img/Scissor.png"
import Steam from "../../img/Steam.png"
import Mimic from "../../img/Mimic.png"

class Home extends Component{
    render(){
        return(<div className="home"> 
               
                    <p className="TituloDaHome">Home</p>
                    Pagina Gamejolt: <a href={"https://gamejolt.com/games/TKH/554019"}>Clique Aqui</a>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={Diamond}></img> 
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Diamond Warrior:<br/> Converte dano recebido em cura para aliados proximos
                        </div>
                            <div className="col">
                                <img src={door}></img>
                                
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Other Side Door:<br/> Teletransporta inimigos e disparos para um lugar especifico após contat
                        </div>
                            <div className="col">
                                <img src={nameeater}></img>
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Name Eater:<br/> Permite o jogador definir 4 regras que se aplicarão no jogo tanto para inimigos quantos aliados enquanto o "NameEater" estiver em campo
                        </div>
                            <div className="col">
                                <img src={LifeIsolator}></img>
                                 
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Life Isolator:<br/>Cria árvores que bloqueiam os inimigos na posição escolhida pelo jogador
                        </div>
                            <div className="col">
                                <img src={Bomber}></img>
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Bomb Maker:<br/>Atira bombas que grudam nos inimigos e quando ativados pelo "Bomb Maker" explodem
                        </div>
                            <div className="col">
                                <img src={Battery}></img>
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Battery:<br/>Quando ativado causa dano alto por segundo a todos inimigos em uma pequena area
                        </div>
                            <div className="col">
                                <img src={Star}></img>
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Star:<br/>Gera uma energia depois de um tempo
                        </div>
                            <div className="col">
                                <img src={Shield}></img>
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Shield:<br/>Uma unidade que não ataca mas possui grande quantidade de vida
                        </div>
                            <div className="col">
                                <img src={Turret}></img>
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Turret:<br/>Uma unidade de dano a longa distancia 
                        </div>
                            <div className="col">
                                <img src={Granade}></img>
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Granade:<br/>Explode instantaneamente quando entra em campo causando alto dano em uma grande area
                        </div>
                            <div className="col">
                                <img src={Mimic}></img>
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Mimico:<br/>Copia uma unidade proxima e entra em estado de construção por um tempo muito maior que o normal
                        </div>
                            <div className="col">
                                <img src={Steam}></img>
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Steam:<br/>Drena a água de forma vagarosa para usa-la como munição disparando uma concentração pesada de vapor que da dano alto mas necessita recarregar após disparar
                        </div>
                            <div className="col">
                                <img src={Scissor}></img>
                            </div>
                            <div className="col-6 text-center borda row Descricao">
                            Scissor:<br/>Corta todos arbustos de uma linha
                        
                        </div>
                        </div>
                    </div> 
                    
                    <div className="">
                      
                    
                    </div>
             </div>);
    }
}

export default Home