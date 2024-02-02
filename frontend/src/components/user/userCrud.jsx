import React from "react";
import { Component } from "react";
import Main from "../templates/main";

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle:"Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}


export default class UserCrud extends Component{


   render(){
    return(
         <Main {...headerProps}>
            Cadastro de Usuário
         </Main>
    )

   }


}