import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dimensions } from '../helper';

const Container = styled.section`
    height: 100vh;
    border-right: 1px solid #777;
    flex-direction: column;
    display: flex;

    .icon {
        width: 120px;
        height: 100px;
        border-bottom: 1px solid #777;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        img {
            width: 40px;
            margin: auto;
            display: block;
        }
    }

    .name {
        width: 120px;
        flex: 1;
        writing-mode: vertical-rl;
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 50px;
        box-sizing: border-box;
    }
    @media (max-width: ${dimensions.md}) {
        .icon {
            height: 80px;
        }
        .icon, .name {
            width: 80px;

            img {
                width: 30px;
            }
        }

        
    }
    
`;
function Navbar() {
    return (
        <Container>
            <div className='icon'>
                <img src="/icons/menu.svg" alt="menu" />
            </div>
            <Link to="/" className='icon'>
                <img src="/icons/back.svg" alt="voltar" />
            </Link>
            <div className='name'>
                <h2>espmed.</h2>
            </div>
        </Container>
    )
}

export default Navbar