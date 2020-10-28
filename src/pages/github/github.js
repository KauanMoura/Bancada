import { render } from "@testing-library/react"
import React, {Component} from "react"
import './github.css';

class Github extends Component{
    constructor(){
        super();
        this.state = {
            user: [],
            repo: [],
        };
    }

        componentDidMount(){
            fetch('https://api.github.com/users/KauanMoura') //esse comando pega as infos da API github
            .then( response => response.json())// esse comando converte as infos para o formato json
            .then( data =>  {this.setState({user: data})})// esse comando coloca o valor 'data2'
          
            fetch('https://api.github.com/users/KauanMoura/repos') //esse comando pega as infos da API github
            .then( response => response.json())// esse comando converte as infos para o formato json
            .then( data =>  {this.setState({repo: data})})// esse comando coloca o valor 'data2'
        }

    render(){
        const{user, repo} = this.state
       // console.log(data)
        return<>
   <div className="container">
                 <div className="row">
                    <div className="col-3">
                        <p className="titulo">Meu GitHub Infos</p>
                        <div>
                            <img  className="circle-photo" src={user.avatar_url} alt="Profile photo"></img>
                            <div>
                                <span className="font-weight-bold">Login:</span> @{user.login} <br/>
                                <span className="font-weight-bold">Name:</span> {user.name} <br/>
                                <span className="font-weight-bold">Company:</span> {user.company} <br/>
                                <span className="font-weight-bold">Location:</span> {user.lcoation} <br/>
                                <div className="row">
                                    <div className="col-6">
                                        Seguidores
                                        <p>{user.followers}</p>
                                    </div>
                                    <div className="col-6">
                                        Seguindo
                                        <p>{user.following}</p>
                                    </div>
                                </div>
                                <p>
                                        Bio:<br/>
                                        {user.bio}
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                    {repo.map(
                        repositorio => 
                            <div className="card bg-card">
                                Nome do Repositorio: {repositorio.name} <br/>
                                Descrição: {repositorio.deion} <br/>
                                Link do Repositório: <a href={repositorio.html_url}>Clique Aqui</a>
                            </div>
                    )}
                    </div>
                </div>
           </div>
     
   
        </>
    }
}

export default Github