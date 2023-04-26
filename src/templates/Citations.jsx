import React from 'react'
import styled from 'styled-components';
import { dimensions } from '../helper';

const Container = styled.section`
    height: 100vh;
    min-width: 100vw;
    padding: 0px 30px;
    box-sizing: border-box; 
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 120vh;
        height: 120vh;
        border-radius: 120vh;
        background-color: #D5DEF0;
        z-index: -1;
        filter: blur(25px);
        left: 50%;
        top: 0;
        transform: translate(-50%, -10vh);
    }

    @media (max-width: ${dimensions.lg}) {
        min-width: ${dimensions.lg};
    }

`;

const Section = styled.div`
    height: 33%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    
    div {
        width: 50%;
        max-width: 90vw;
        .citation {
            font-size: clamp(20px, 5vw, 45px);;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .source {
            margin: 0px;
            font-size: 18px;
        }
    }

    @media (max-width: ${dimensions.md}) {
        justify-content: center;
        div {
            width: 100%;
            
            text-align: center;
        }
    }
`;

function Citations() {
    return (
        <Container>
            <Section justify="flex-start">
                <div>
                    <p className='citation'>“O número de pessoas deslocadas devido a guerras, violência e perseguição chegou a 68,5 milhões em 2017.”</p>
                    <p className='source'>Público 2020</p>
                </div>
            </Section>
            <Section justify="center">
                <div>
                    <p className='citation'>“O número de pessoas deslocadas devido a guerras, violência e perseguição chegou a 68,5 milhões em 2017.”</p>
                    <p className='source'>Público 2020</p>
                </div>
            </Section>
            <Section justify="flex-end">
                <div>
                    <p className='citation'>“O número de pessoas deslocadas devido a guerras, violência e perseguição chegou a 68,5 milhões em 2017.”</p>
                    <p className='source'>Público 2020</p>
                </div>
            </Section>
        </Container>
    )
}

export default Citations