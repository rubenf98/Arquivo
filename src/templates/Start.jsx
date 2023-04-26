import React from 'react'
import styled from 'styled-components';
import { dimensions } from '../helper';

const Content = styled.section`
    height: 100vh;
    margin: auto;
    position: relative;
    display: flex;

    img {
        height: 100vh;
    }

    .text {
        padding: 0px 200px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: clamp(24px, 10vw, 120px);
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

    @media (max-width: ${dimensions.md}) {
        width: 100%;

        .text {
            padding: 0px 50px;
        }
            
    }
    
`;
function Start(props) {
    return (

        <Content>
            <div className='text'>
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
            <img src={props.image} alt={props.title} />
        </Content>

    )
}

export default Start