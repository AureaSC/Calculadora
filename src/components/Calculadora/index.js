import React from 'react';
import Visor from '../Visor';
import Botao from '../Botao';
import styled from 'styled-components';

const linhaBotao = //['AC', '+/-', '%', 'div', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '='];
    [
        {
            valor: 'AC',
            colorido: true
        },
        {
            valor: '+/-',
            colorido: true
        },
        {
            valor: '%',
            colorido: true
        },
        {
            valor: 'div',
            colorido: true
        },
        {
            valor: '7'
        },
        {
            valor: '8'
        },
        {
            valor: '9'
        },
        {
            valor: 'x',
            colorido: true
        },
        {
            valor: '4'
        },
        {
            valor: '5'
        },
        {
            valor: '6'
        },
        {
            valor: '-',
            colorido: true
        },
        {
            valor: '1'
        },
        {
            valor: '2'
        },
        {
            valor: '3'
        },
        {
            valor: '+',
            colorido: true
        },
        {
            valor: '0',
            largo: true
        },
        {
            valor: ','
        },
        {
            valor: '=',
            colorido: true
        }
];


const Grid = styled.div`
display: flex;
max-width: 200px;
flex-wrap: wrap;`;

function Calculadora() {
    return (
        <div> Esta é a Calculadora
            <Visor resultado="10" />
            <Grid>
                {
                    linhaBotao.map((item) => <Botao valor={item.valor} colorido={item.colorido} largo={item.largo} />)
                }
            </Grid>
        </div >
    );
}

//React.createElement(Visor);

export default Calculadora;

// <Botao valor="7" />
// <Botao valor="8" />
// <Botao valor="9" />
// <Botao valor="x" colorido={true} />
// <Botao valor="4" />
// <Botao valor="5" />
// <Botao valor="6" />
// <Botao valor="-" colorido={true} />
// <Botao valor="3" />
// <Botao valor="2" />
// <Botao valor="1" />
// <Botao valor="+" colorido={true} />

// <Botao valor="0" largo={true} />
// <Botao valor="," />
// <Botao valor="=" colorido={true} />