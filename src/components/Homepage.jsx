import React, { useState } from 'react';
import styled from 'styled-components';
import { maxWidth } from "../helper";
import HorizontalScroll from 'react-scroll-horizontal'
import { Link } from 'react-router-dom';

const Header = styled.section`
    width: 100vw;
    height: 100vh;
    margin: auto;
    position: relative;

    padding: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    h1 {
        color: white;
        font-size: 120px;
        font-weight: bold;
        line-height: 100%;
        margin: 0px;
        flex: 1;
    }

    p {
        font-size: 26px; 
        margin: 0px;
        opacity: .9;
        width: 30%;
        margin-left: auto;
    }
`;

const SpecialitiesContainer = styled.section`
    margin: 100px 0px;

    .title-container {
        margin: auto;
        max-width: ${maxWidth};
    }

    h3 {
        opacity: .7;
        font-size: 18px;
        line-height: 100%;
    }

    h2 {
        font-size: 80px;
        font-weight: bold;
        line-height: 100%;
        margin: 0px 0px 20px 0px;
    }

    .speciality {
        text-align: right;
        font-size: 40px;
        font-weight: bold;
        line-height: 100%;
        margin: 0px;
        margin: auto;
        max-width: ${maxWidth};
    }
`;

const SpecialityContainer = styled(Link)`
    width: 250px;
    height: 80vh;
    padding: 0px 10px;
    box-sizing: border-box;

    img {
        width: 100%;
        height: 60%;
        object-fit: cover;
        margin-top: ${props => props.marginTop};
        cursor: pointer;
        transition: all .3s ease;
        padding-top: 10px;
        box-sizing: border-box;

        &:hover {
            border-top: 1px solid #777777;
        }

        
    }
`;






function Homepage() {
    const [currentItem, setCurrentItem] = useState({ id: 1, name: "Oncologia", image: "/images/oncologia.jpg" })

    const items = [
        { id: 1, name: "Oncologia", link: "/oncologia", image: "/images/oncologia.jpg" },
        { id: 2, name: "Ortopedia", link: "/oncologia", image: "/images/ortopedia.jpg" },
        { id: 3, name: "Oftalmologia", link: "/oncologia", image: "/images/oftalmologia.jpg" },
        { id: 4, name: "Neurocirurgia", link: "/oncologia", image: "/images/neurocirurgia.jpg" },
        { id: 5, name: "Gastrenterologia", link: "/oncologia", image: "/images/gastrenterologia.jpg" },
        { id: 6, name: "Cirurgia Geral", link: "/oncologia", image: "/images/cirurgia_geral.jpg" },
        { id: 7, name: "Cardiologia", link: "/oncologia", image: "/images/cardiologia.jpg" },
        { id: 8, name: "Pediatria", link: "/oncologia", image: "/images/pediatria.jpg" },
        { id: 9, name: "Pneumologia", link: "/oncologia", image: "/images/pneumologia.jpg" },
        { id: 10, name: "Psiquiatria", link: "/oncologia", image: "/images/psiquiatria.jpg" },
        { id: 11, name: "Urgências", link: "/oncologia", image: "/images/urgencias.jpg" },
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
                <img src="/images/header_xl.jpg" alt="hospital" />
                <h1>espmed.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.</p>
            </Header>

            <SpecialitiesContainer>
                <div className='title-container'>
                    <h3>descobre a importância das...</h3>
                    <h2>Especialidades</h2>
                </div>
                <div style={{ width: "100vw", height: "600px" }}>
                    <HorizontalScroll reverseScroll>
                        {items.map((item) => (
                            <SpecialityContainer to={item.link} marginTop={() => getTopPercentage(item.id)} onMouseEnter={() => handleHover(item)}>
                                <img src={item.image} alt={item.name} />
                            </SpecialityContainer>
                        ))}
                    </HorizontalScroll>
                </div>
                <p className='speciality'>{currentItem.id + ". " + currentItem.name}</p>
            </SpecialitiesContainer>
        </div>
    );
}

export default Homepage;
