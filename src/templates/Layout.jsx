import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

function Layout(props) {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <HorizontalScroll reverseScroll>
                {props.children}
            </HorizontalScroll>
        </div>
    )
}

export default Layout