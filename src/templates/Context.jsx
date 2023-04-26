import React from 'react'
import styled from 'styled-components';
import { dimensions } from '../helper';

const Container = styled.section`
    height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 50px;
    box-sizing: border-box;
    gap: 50px;

    .title {
        box-sizing: border-box;
        width: 50%;

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
    .text {
        width: 50%;

        p {
            font-size: clamp(16px, 3vw, 26px);
            opacity: .9;
        }
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        gap: 0px;
        display: flex;
        max-width: ${dimensions.md};
        
        .title, .text {
            width: 100%;
        }
    }

    @media (max-width: ${dimensions.sm}) {
        max-width: ${dimensions.sm};
    }
    
`;

const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;

    p {
        width: 50%;
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        gap: 0px;
        p {
            width: 100%;
        }
    }
    
`;


function Context(props) {
    return (
        <Container>
            <div className='title'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className='text'>
                <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
                <FlexContainer>
                    <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
                    <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
                </FlexContainer>
                <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
                <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
            </div>
        </Container>
    )
}

export default Context