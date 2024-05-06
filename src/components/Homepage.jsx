import React, { useState } from 'react';
import styled from 'styled-components';
import { dimensions, maxWidth } from "../helper";
import HorizontalScroll from 'react-scroll-horizontal'
import { Link, NavLink } from 'react-router-dom';

const Header = styled.section`
    width: 100vw;
    height: 100vh;
    margin: auto;
    background-color: ${({ theme }) => theme.primary};
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;

    .description {
        width: 100%;
        
    }

    .header {
        width: 60%;
        height: calc(50% + 40px);
        object-fit: cover;
        position: absolute;
        bottom: -100px;
        right: 0;
    }

    h1 {
        color: black;
        font-size: clamp(50px, 10vw, 200px);
        font-weight: 400;
        line-height: 100%;
        margin: 0px 0px 30px 0px;
        width: 100%;
        line-height: 100%;
        font-family: "Tomorrow", sans-serif;

        span {
            color: white;
        }
    }

    p {
        font-size: clamp(18px, 2.5vw, 26px); 
        margin: 0px;
        width: 40%;
        padding-right: 30px;
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.xl}) {
        p {
            width: 50%;
        }

        .header {
            height: calc(50% + 60px);
            width: 50%;
            bottom: -80px;
        }
    }

    @media (max-width: ${dimensions.lg}) {
        display: block;
        padding: 20px;
        min-height: 100vw;
        height: auto;

        h1 {
            margin: 150px 0px 20px 0px;
        }

        p {
            width: 100%;
            padding-right: 0px;
        }

        .header {
            width: 100%;
            position: relative;
            bottom: 0;
            padding: 20px 0px 50px 0px;
            box-sizing: border-box;
        }
    }
`;

const SpecialitiesContainer = styled.section`
    margin: 100px 0px;

    .title-container {
        margin: auto;
        max-width: ${maxWidth};
    }

    h3 {
        font-weight: 400;
        opacity: .7;
        font-size: 18px;
        line-height: 100%;
        margin: 0px;
    }

    h2 {
        font-size: 80px;
        font-weight: bold;
        line-height: 100%;
        margin: 0px 0px 20px 0px;
    }

    @media (max-width: ${dimensions.md}) {

        h3, h2 {
            padding: 0px 20px;
            box-sizing: border-box;
        }
        

    }

`;

const SpecialityContainer = styled.div`
    width: 300px;
    height: 80vh;
    padding: 0px 10px;
    box-sizing: border-box;
    position: relative;

    img {
        width: 100%;
        height: 60%;
        object-fit: cover;
        margin-top: ${props => props.marginTop};
        cursor: pointer;
        transition: all .3s ease;
        padding-top: 10px;
        box-sizing: border-box;
        /* opacity: ${(props) => props.hasLabel ? "1" : "0"}; */
        position: relative;

        &:hover {
            border-top: 1px solid #777777;
        }

        
        &:after {
            display: block;
            content: "";
            background-color: #ff0000;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100px;
            height: 100px;
        }
        
    }
    
    p {
        /* display: ${(props) => props.hasLabel ? "block" : "none"}; */
        opacity: ${(props) => props.hasLabel ? "1" : "0"};
        transition: all .8s ease;
        position: absolute;
        bottom: 340px;
        right: 30px;
        color: white;
        font-weight: bold;
        font-size: 30px;
    }

    @media (max-width: ${dimensions.md}) {
        height: 90vh;
        img {
            height: 60vh;
        }
        
    }
`;


const TextToActionContainer = styled.section`
    margin: 0px 50px;
    padding: 0px 0px 100px 0px;

    box-sizing: border-box;
    border-top: 1px solid black;

    p {
        font-size: clamp(20px, 3vw, 50px);
        text-align: justify;
    }

    button {
        font-size: clamp(16px, 2vw, 26px);
        padding: 12px 20px;
        box-sizing: border-box;
        background-color: transparent;
        box-shadow: 0px;
        color: ${({ theme }) => theme.primary};
        border: 3px solid;
        border-color: ${({ theme }) => theme.primary};
        display: flex;
        align-items: bottom;
        gap: 15px;
        cursor: pointer;
        font-weight: bold;
        
        img {
            width: 20px;
        }
    }

    a {
        text-decoration: none;
    }

    ul {
        padding: 0px;
        list-style: none;
        margin-bottom: 50px;

        li {
            margin: 10px 0px;
        }
        

        a {
            font-size: clamp(18px, 2.5vw, 22px);
            color: ${({ theme }) => theme.secundary};
            text-decoration: underline;
            
        }
    }
`;

const Navbar = styled.section`
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 100px);
    padding: 50px;


    .logo {
        width: 80px;
        height: auto;
    }

    a {
        text-decoration: none;

    }

    button {
        font-size: clamp(16px, 2vw, 20px);
        padding: 12px 20px;
        box-sizing: border-box;
        background-color: transparent;
        box-shadow: 0px;
        color: black;
        border: 2px solid black;
        display: flex;
        align-items: bottom;
        gap: 15px;
        cursor: pointer;
        
        img {
            width: 20px;
        }
    }
`;



function Homepage() {
    const [currentItem, setCurrentItem] = useState({ id: 1, name: "Animais", image: "/images/animais.jpg" })

    const items = [
        { id: 1, name: "Animais", image: "/images/animais.jpg" },
        { id: 2, name: "Veículos", image: "/images/veiculos.jpg" },
        { id: 3, name: "Comida", image: "/images/comida.jpg" },
        { id: 4, name: "Pessoas", image: "/images/pessoas.jpg" },
        { id: 5, name: "Mobília", image: "/images/mobilias.jpg" },
        { id: 6, name: "Natureza", image: "/images/natureza.jpg" },
        { id: 7, name: "Eletrónica", image: "/images/eletronica.jpg" },
        { id: 8, name: "Edifícios", image: "/images/edificios.jpg" },
        { id: 9, name: "Ferragens", image: "/images/ferragens.jpg" },

    ]

    const handleHover = (item) => {
        setCurrentItem(item);
    }

    const getTopPercentage = (aId) => {
        var percentage = "40%"
        var diff = Math.abs(currentItem.id - aId);

        if (diff == 0) {
            percentage = "0%";
        } else if (diff <= 1) {
            percentage = "10%";
        } else if (diff <= 1) {
            percentage = "20%";
        } else if (diff <= 2) {
            percentage = "30%";
        }

        return percentage;
    }

    return (
        <div>

            <Header>
                <Navbar>
                    <img className='logo' src="/images/logo.svg" alt="" />
                    <NavLink to="/model">
                        <button>ArquivoNet <img src="/icons/arrow_black.svg" alt="arrow" /></button>
                    </NavLink>
                </Navbar>
                <div>
                    <h1>ARQUIVO<span>NET</span></h1>
                    <div className='description'>
                        <p>O projeto ArquivoNet visa a criação de um sistema inteligente para classificação de imagens com perspectivas temporais através de informação preservada em Arquivo.pt</p>
                        <img className='header' src="/images/header.jpg" alt="hospital" />
                    </div>
                </div>
            </Header>

            <SpecialitiesContainer>
                <div className='title-container'>
                    <h3>as classes do nosso</h3>
                    <h2>Modelo</h2>
                </div>
                <div style={{ width: "100vw", height: "600px" }}>
                    <HorizontalScroll reverseScroll>
                        {items.map((item) => (
                            <SpecialityContainer hasLabel={currentItem.id == item.id} marginTop={() => getTopPercentage(item.id)} onMouseEnter={() => handleHover(item)}>
                                <div className='opacity' />
                                <img src={item.image} alt={item.name} />
                                <p className='speciality'>{item.name}</p>
                            </SpecialityContainer>
                        ))}
                    </HorizontalScroll>
                </div>
                {/* <p className='speciality'>{currentItem.id + ". " + currentItem.name}</p> */}
            </SpecialitiesContainer>

            <TextToActionContainer>
                <p>Estamos entusiasmados para que utilizem o ArquivoNet e desenvolvam os seus próprios métodos inovadores com os dados e estratégias que deixamos preparados.</p>
                <ul>
                    <li><a href="https://github.com/rubenf98/Arquivo" target="_blank" rel="noopener noreferrer">Descrição do projeto</a></li>
                    <li><a href="https://drive.google.com/file/d/1wk98MSac3jmNDmSIYA0CxLmIwHG0rb3s/view?usp=sharing" target="_blank" rel="noopener noreferrer">Dados de treino</a></li>
                    <li><a href="https://drive.google.com/drive/folders/1vhNpBmidFmz-OvjOTS0uy3IdTrDuhfqc?usp=sharing" target="_blank" rel="noopener noreferrer">Modelos IA</a></li>
                    <li><a href="https://github.com/rubenf98/ArquivoNet_Scrapper" target="_blank" rel="noopener noreferrer">Scrapper</a></li>
                </ul>

                <NavLink to="/model">
                    <button>ArquivoNet <img src="/icons/arrow.svg" alt="arrow" /></button>
                </NavLink>

            </TextToActionContainer>
        </div>
    );
}

export default Homepage;
