import React from 'react'
import styled from 'styled-components';
import { dimensions } from '../helper';

const Container = styled.section`
    height: 100vh;
    min-width: 100vw;
    padding: 0px 30px;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;

    h2 {
        font-size: clamp(24px, 7vw, 60px);
        line-height: 100%;
        text-align: center;
    }

    .section-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        flex: 1;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;

        .section-container {
            flex-direction: row;
        }
    }
`;

const Section = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 0px 50px 0px;
    box-sizing: border-box;
    border-bottom: 1px solid #777;
    border-width: ${props => props.hideBorder ? "0px" : "1px"};
    
    h2 {
        font-size: 60px;
        text-align: center;
    }

    .title {
        padding-right: 150px;
        box-sizing: border-box;
        font-size: 24px;
        line-height: 100%;
        span {
            opacity: .5;
        }
    }

    .bullet-container {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        div {
            padding: 0px 30px;
            box-sizing: border-box;

            ul {
                list-style-type: circle;

                li {
                    margin: 10px 0px;
                    font-size: 20px;
                }
            }
        }
    }

    @media (max-width: ${dimensions.md}) {
        border-width: 0px;
        flex-direction: column;
    }
    
`;

function Table() {
    return (
        <Container>
            <h2>Lorem</h2>

            <div className='section-container'>
                <Section>
                    <div className='title'><h3><span>01.</span> Advices</h3></div>
                    <div className='bullet-container'>
                        <div>
                            <ul>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                            </ul>
                        </div>
                    </div>
                    <div className='bullet-container'>
                        <div>
                            <ul>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                            </ul>
                        </div>
                    </div>
                    <div className='bullet-container'>
                        <div>
                            <ul>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                            </ul>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className='title'><h3><span>01.</span> Advices</h3></div>
                    <div className='bullet-container'>
                        <div>
                            <ul>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                            </ul>
                        </div>
                    </div>
                    <div className='bullet-container'>
                        <div>
                            <ul>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                            </ul>
                        </div>
                    </div>
                    <div className='bullet-container'>
                        <div>
                            <ul>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                            </ul>
                        </div>
                    </div>
                </Section>
                <Section hideBorder>
                    <div className='title'><h3><span>01.</span> Advices</h3></div>
                    <div className='bullet-container'>
                        <div>
                            <ul>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                            </ul>
                        </div>
                    </div>
                    <div className='bullet-container'>
                        <div>
                            <ul>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                            </ul>
                        </div>
                    </div>
                    <div className='bullet-container'>
                        <div>
                            <ul>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                                <li>Risk analyses</li>
                            </ul>
                        </div>
                    </div>
                </Section>
            </div>
        </Container>
    )
}

export default Table