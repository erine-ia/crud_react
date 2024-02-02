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
        const url = user.id ? `${baseUrl}/${user.id}`

        // o metodo será definido com parametros pela função axios
        //isso ocorrerá para incluir ou alterar um usuario:
        :axios[method](url, user)
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


        //... para incluir novo usuario usamos post


        //para atualizar usuario existente usamos put

    

   render(){
    return(
         <Main {...headerProps}>
            
         </Main>
    )

   }


}