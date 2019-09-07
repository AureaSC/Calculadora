import React from 'react';
import styled from 'styled-components'
import { tsPropertySignature } from '@babel/types';

const BotaoCustomizado = styled.button`
    background-color: ${(props) => props.colorido? 'papayawhip' : 'grey'};
    width: ${(props) => props.largo? '100px' : '50px'};
    height: 50px;
`;

// Tipos de botão:
//      Largo
//      Colorido
//      Valor

function Botao (props) {
    return  (<BotaoCustomizado
                colorido = {props.colorido}
                largo = {props.largo}>
        {props.valor}
        </BotaoCustomizado>);
}

export default Botao;