import React from 'react'
import styled from 'styled-components';
import { dimensions } from '../helper';

const Container = styled.section`
    height: 100vh;
    width: 100vw;
    min-width: 100vw;
    padding: 0px 100px;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 60px;
        line-height: 100%;
    }

    .section-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        flex-wrap: wrap;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        min-width: ${dimensions.md};
    }

    @media (max-width: ${dimensions.sm}) {
        min-width: ${dimensions.sm};
    }
`;

const Section = styled.div`
    width: 33%;
    padding: 0px 30px;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;

    .date {
        font-size: 18px;
        margin: 0px;
        opacity: .6;
        border-bottom: 1px solid #777;
    }

    h3 {
        font-size: 30px;
        line-height: 100%;
        opacity: .5;
        margin: 20px 0px 10px 0px;
    }

    .description {
        font-size: 18px;
        margin: 0px;
    }

`;

function News() {
    return (
        <Container>
            <h2>Notícias relevantes</h2>

            <div className='section-container'>
                <Section>
                    <p className='date'>17/06/2022</p>
                    <h3>Canicule: les mesures indispensables</h3>
                    <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
                </Section>
                <Section>
                    <p className='date'>17/06/2022</p>
                    <h3>Canicule: les mesures indispensables</h3>
                    <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
                </Section>
                <Section>
                    <p className='date'>17/06/2022</p>
                    <h3>Canicule: les mesures indispensables</h3>
                    <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
                </Section>
                <Section>
                    <p className='date'>17/06/2022</p>
                    <h3>Canicule: les mesures indispensables</h3>
                    <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
                </Section>
                <Section>
                    <p className='date'>17/06/2022</p>
                    <h3>Canicule: les mesures indispensables</h3>
                    <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
                </Section>
                <Section>
                    <p className='date'>17/06/2022</p>
                    <h3>Canicule: les mesures indispensables</h3>
                    <p>The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database.</p>
                </Section>
            </div>
        </Container>
    )
}

export default News