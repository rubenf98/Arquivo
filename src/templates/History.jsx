import React from 'react'
import { Chart } from 'react-charts'
import styled from 'styled-components';
import { dimensions } from '../helper';

const Container = styled.section`
    height: 100vh;
    width: 100%;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #DDDDDD;
    box-sizing: border-box;

    .text {
        padding: 0px 50px;
        box-sizing: border-box;
        width: 45%;

        h2 {
            font-size: clamp(24px, 7vw, 60px);
            font-weight: bold;
            margin: 0px;
        }

        p {
            font-size: clamp(16px, 5vw, 26px);
            margin: 0px;
            opacity: .9;
            width: 100%;
            margin-left: auto;
        }
    }
    .graph {
        width: 45%;
    }
    
    @media (max-width: ${dimensions.md}) {
        flex-direction: column;
        padding: 0px 50px;
        max-width: ${dimensions.md};

        .text, .graph {
            width: 100%;
        }
    }

    @media (max-width: ${dimensions.sm}) {
        max-width: ${dimensions.sm};
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
                <Chart style={{ height: "100%", maxHeight: "500px", width: "100%" }} data={[
                    {
                        label: 'Series 1',
                        data: [[2010, 100], [2011, 200], [2012, 300], [2013, 200], [2014, 200]]
                    },
                ]} axes={[
                    { primary: true, type: 'ordinal', position: 'bottom' },
                    { type: 'linear', position: 'left' }
                ]} />
            </div>
        </Container>
    )
}

export default History