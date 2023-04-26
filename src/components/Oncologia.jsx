import React from 'react'
import Start from '../templates/Start'
import Navbar from '../templates/Navbar'
import HorizontalScroll from 'react-scroll-horizontal'
import History from '../templates/History'
import Context from '../templates/Context'
import Citations from '../templates/Citations'
import styled from 'styled-components';
import Table from '../templates/Table'
import News from '../templates/News'
import Footer from '../templates/Footer'
import { dimensions } from '../helper'

const Image = styled.section`
    min-width: 100vw;
    height: 100vh;
    margin: 0px 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100vh;
        height: 100vh;
        object-fit: cover;
        border-radius: 90px;
        transform: rotate(-40deg);
    }

    @media (max-width: ${dimensions.md}) {
        width: ${dimensions.md};
        margin: 0px;

        img {
            width: 70%;
            height: auto;
            transform: rotate(0deg);
        }
    }

    @media (max-width: ${dimensions.sm}) {
        max-width: ${dimensions.sm};
    }
`;

const WordHeatMap = styled.section`
    min-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 70%;
    }

    @media (max-width: ${dimensions.md}) {
        min-width: ${dimensions.md};

        img {
            width: 70%;
            height: auto;
        }
    }

    @media (max-width: ${dimensions.sm}) {
        min-width: ${dimensions.sm};
    }
`;

function Oncologia() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <HorizontalScroll reverseScroll>
                <Navbar />
                <Start
                    title="Oncologia"
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu."
                    image="/images/oncologia.jpg"
                />
                <History
                    title="Dados & História"
                    description="The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database."
                />
                <Context
                    title="Contextualização"
                    description="The histogram shows the quotient of images with Boat and Watercraft in relation to the total number of images in the database."
                />
                <Citations />
                <Image>
                    <img src="/images/oncologia.jpg" />
                </Image>

                <Table />
                <WordHeatMap>
                    <img src="/images/words/oncologia.png" />
                </WordHeatMap>

                <News />

                <Footer />

            </HorizontalScroll>
        </div>
    )
}

export default Oncologia