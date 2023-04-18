import React from 'react'
import Start from '../templates/Start'
import Layout from '../templates/Layout'
import Navbar from '../templates/Navbar'
import HorizontalScroll from 'react-scroll-horizontal'
import History from '../templates/History'

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

            </HorizontalScroll>
        </div>
    )
}

export default Oncologia