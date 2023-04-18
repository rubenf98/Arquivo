import React from 'react'
import styled from 'styled-components';

const Content = styled.section`
    height: 100vh;
    margin: auto;
    position: relative;
    display: flex;
    min-width: calc(100vw - 100px);

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
            font-size: 120px;
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