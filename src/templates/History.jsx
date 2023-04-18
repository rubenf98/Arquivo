import React from 'react'
import styled from 'styled-components';

const Container = styled.section`
    height: 100vh;
    min-width: 100vw;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #DDDDDD;

    .text {
        padding: 0px 50px;
        box-sizing: border-box;
        width: 45%;

        h2 {
            font-size: 80px;
            font-weight: bold;
            margin: 0px;
        }

        p {
            font-size: 26px; 
            margin: 0px;
            opacity: .9;
            width: 100%;
            margin-left: auto;
        }
    }
    .graph {
        width: 45%;
    }
    
`;

function History(props) {
    return (
        <Container>
            <div className='text'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className='graph'>

            </div>
        </Container>
    )
}

export default History