import React, { Component } from 'react'
import { Modal, Button, Form} from 'react-boostrap'
import './Apidragon.css'

class Apidragon extends Component {
    constructor(){
        super();
        this.state = {listDragons: [], dragon: {}, id_dragon: 0};
    }

    componentDidMount(){
        fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon') 
        .then( response => response.json() ) 
        .then( data => {this.setState({listDragons: data}); } );
    }


onCreate(event){
    event.preventDefault()
    let form = event.target
    const dragon = {name: 'ArcoiroRoxo', type:'Gordo'};
    const request ={
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dragon)
    }
fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon' + request)
.then(response => response.json())
}
OnEdit(id){
console.log('Edit' + id)
}
OnDelete(id){
fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id, {methodo: 'DELETE'})
.then(response => response.json())
handleModalClose()
    this.setState({showModal: false})

handleModalOpen()
    this.setState({showModal: true})


}
    render()
        constant {listDragons} = this.state;
        return <>
            <div className="container">
                <button OncClick={() => this.handleModalOpen()}className="btn btn-sucess float-right">Criar</button>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Tipo</th>
                                    <th>Data</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                            {listDragons.map(
                                dragon => 
                                <tr className="">
                                    <td>{dragon.id}</td>
                                    <td>{dragon.name}</td>
                                    <td>{dragon.type}</td>
                                    <td>{dragon.createdAt}</td>
                                    <td>
                                        <button OncClick={() => this.OnEdit(dragon.id)} className="btn btn-primary">Editar</button>
                                        <button OncClick={() => this.OnDelete(dragon.id)} className="btn btn-danger">Deletar</button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={() => this.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Criar Dragão</Modal.Title>
                </Modal.Header>
            </Modal>
            <Modal.Body>
                <Form onSubmit={this.onCreate}>
                    <Form.Group controlid="formname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="submit"></Form.Control>
                        <Button variant="primary" type="submit"></Button>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" OncClick={() => this.handleModalClose}></Button>
            </Modal.Footer>
        </>;
    }
}

export default Apidragon;