import React from 'react'
import styled from 'styled-components';
import { dimensions } from '../../helper';

const Container = styled.section`
    padding: 20px 50px;
    box-sizing: border-box;

    h3 {
        font-weight: 400;
        font-size: clamp(18px, 3vw, 26px);
        margin: 0px 0px 20px 0px;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 20px;
    }
`;

const Gallery = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
        cursor: pointer;
        flex-basis: calc(25% - 10px);
        padding: 5px 0px;
        box-sizing: border-box;
        width: 25%;
        aspect-ratio: 1 / 1;
        object-fit: cover;

    }

    @media (max-width: ${dimensions.md}) {
        img {
            flex-basis: calc(33% - 10px);
            width: 33%;
        }
    }

    @media (max-width: ${dimensions.sm}) {
        img {
            flex-basis: calc(50% - 10px);
            width: 50%;
        }
    }
`;

function Examples(props) {
    const srcs = [
        "sofa",
        "arvore",
        "barco",
        "cao",
        "carro",
        "casa",
        "crianca",
        "flor",
        "hotel",
        "martelo",
        "parafuso",
        "passaro",
        "pessoa",
        "sobremesa",
        "televisao",
        "vegetais"
    ]

    return (
        <Container>
            <h3>Ou utilize uma das imagens exemplo disponíveis</h3>
            <Gallery>
                {srcs.map((currentSrc, index) => (
                    <img key={index} id={currentSrc} onClick={(e) => props.onFileChange(e, "example")} src={"/images/example/" + currentSrc + ".jpg"} alt={currentSrc} />

                ))}
            </Gallery>
        </Container>
    )
}

export default Examples