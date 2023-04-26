import React from 'react'
import styled from 'styled-components';
import { dimensions } from '../helper';

const Container = styled.section`
    height: 100vh;
    min-width: 50vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 100px;
    margin-left: 100px;
    box-sizing: border-box;
    background-color: #DDDDDD;

    h2 {
        font-size: clamp(26px, 7vw, 60px);
        line-height: 100%;
    }
    p {
        font-size:  clamp(16px, 3vw, 18px);
    }

    .button-container {
        display: flex;
        gap: 20px;
        margin-top: 50px;

        .primary, .secundary {
            padding: 20px 50px;
            box-sizing: border-box;
            font-size: 18px;
            border: 2px solid #5e75a1;
            font-weight: bold;
            cursor: pointer;
        }

        .primary {
            background-color: #5e75a1;
            color: #DDDDDD;
        }

        .secundary {
            background-color: transparent;
            color: #5e75a1;
        }
    }
    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
    
`;

function Footer() {
    return (
        <Container>
            <div>
                <h2>Continua a explorar</h2>
                <p>This application allows you to explore the art collections of Central European museums and search for artworks based on specific iconographic motifs. You can select a motif or combination of objects, and reveal the artworks across the centuries.</p>

                <div className='button-container'>
                    <button className='primary'>Selecionar categoria</button>
                    <button className='secundary'>Recomeçar</button>
                </div>
            </div>

        </Container>
    )
}

export default Footer