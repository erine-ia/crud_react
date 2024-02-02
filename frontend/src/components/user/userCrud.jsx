import React from "react";
import { Component } from "react";
import Main from "../templates/main";
import axios from "axios";

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle:"Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

//criar o estado inicial do componente:
const baseUrl = 'http://localhost:3001/users'

const initialState ={
    user:{
        name:'',
        email:''
    },
    list : []
}


export default class UserCrud extends Component{

    state = {...initialState}

    clear(){
        //limpar formulario quando cancelado
        this.setState({user:initialState.user}) //para limpar o usuario

    }


    //para incluir ou atualizar dados de usuario..
    save(){
        //para saber se o usuario existe(pelo id):
        const user = this.state.user
        const method = user.id ? 'put': 'post'

        //se houver id para usuario a url será baseurl/id_doUsuario
        //se não houver um id, ou seja o usuário não estiver cadastrado a url ser´a definida como baseUrl
        const url = user.id ? `${baseUrl}/${user.id}` : `${baseUrl}`

        // o metodo será definido com parametros pela função axios
        //isso ocorrerá para incluir ou alterar um usuario:


        axios[method](url, user)
            .then(resp =>{
                const list = this.getUpdateList(resp.data) //a lista será atualizada
                //resp.data é os dados de usuario incluidos/atualizados

                //resp.data será persistido no banco de dados
                //e o formulario volta ao estado inicial
                this.setState({user:initialState.user, list})
                //logo após obtemos o retorno da lista 

        })
    }

        getUpdateList(user){
            //neste caso, não há a necessidade declonar a lista visto que o filter gera uma outra lista
            const list = this.state.list.filter(u => u.id !== user.id)
            //adicionamos o novo usuario na primeira posição da lista:
            list.unshift(user)
            //retornamos a lista:
            return list

        }

        //para atualizar nome ou email:
        updateField(event){
            //clonamos this.state.user em user
            const user = {...this.state.user}

            //event.target.name nos fornece o atributo de name em initialState{user.name}
            user[event.target.name] = event.target.value // event.target.value é o valor que será recebido pelo input
            //este valor será atribuido ao user.name
            //o mesmo pdão será usado para o email:
        
         //  user[event.target.email] = event.target.value

           this.setState({user:user})
        }


        //... para incluir novo usuario usamos post


        //para atualizar usuario existente usamos put

    renderForm(){
        return (
            <div className="form">
                <div className="row">


                    <div className="col-12 com-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" id="name" name="name"  value={this.state.user.name} onChange={e => this.updateField(e)} placeholder="Digite o Nome..."/>
                        </div>
                    </div>

                    <div className="col-12 com-md-6">
                        <div className="form-group">
                        <label>Email</label>
                            <input type="email" className="form-control" id="email" name="email"  value={this.state.user.email} onChange={e => this.updateField(e)} placeholder="Digite o Email..."/>
                        </div>
                    </div>

                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )

    }

   render(){

    return(
         <Main {...headerProps}>
            {(this.renderForm())}
         </Main>
    )

   }


}