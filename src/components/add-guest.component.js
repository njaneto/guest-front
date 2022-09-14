import React, { Component } from "react";
import GuestDataService from "../services/guest.service";

export default class AddGuest extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeMensagem = this.onChangeMensagem.bind(this);
    this.onChangeCategoria = this.onChangeCategoria.bind(this);
    this.onChangePeriodo = this.onChangePeriodo.bind(this);
    this.save = this.save.bind(this);
    this.new = this.new.bind(this);

    this.state = {
      id: null,
      nome: "",
      mensagem: "", 
      categoria: 0,
      submitted: false
    };  
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }

  onChangeMensagem(e) {
    this.setState({
      mensagem: e.target.value
    });
  }

  onChangeCategoria(e) {
    this.setState({
      categoria: e.target.value
    });
  }

  onChangePeriodo(e) {
    this.setState({
      periodo: e.target.value
    });
  }

  save() {
    var data = {
      name: this.state.nome,
      message: this.state.mensagem,
      guestType: parseInt(this.state.categoria)

    };

    GuestDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
    
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        alert("Error, Verifique se todos os campos com (*) estão preenchidos")
        console.log(e);
      });
  }

  new() {
    this.setState({
      id: null,
      nome: "",
      mensagem: "", 
      categoria: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Check-in ok! </h4>
            <button className="btn btn-success" onClick={this.new}>
              Novo
            </button>
          </div>
        ) : (

          <div>
            <div className="form-group">
              <label htmlFor="nome">Nome(*)</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                required
                value={this.state.nome}
                onChange={this.onChangeNome}
                name="nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                type="text"
                className="form-control"
                id="mensagem"
                required
                value={this.state.mensagem}
                onChange={this.onChangeMensagem}
                name="mensagem"
              />
            </div>

            <div className="form-group">
              <label htmlFor="categoria">Categoria(*)</label>
              <select className="form-control" value={this.state.categoria} onChange={this.onChangeCategoria}>
                <option value={0}>-- Selecione --</option>
                <option value={1}>VISITANTE</option>
                <option value={2}>AVISO/RECADOS</option>
                <option value={3}>ANIVERSÁRIO </option>
                <option value={4}>ANIVERSÁRIO CASAMENTO</option>
                <option value={5}>ORAÇÃO</option>
                <option value={6}>APRESENTAÇÃO</option>
              </select>
            </div>

            <button onClick={this.save} className="btn btn-success">
              Salvar
            </button>
          </div>
        )}
      </div>
    );
  }
}
