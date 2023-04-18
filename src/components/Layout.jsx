import React, { useEffect } from 'react';
import styled from 'styled-components';
import { light, dark } from "../themes"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;


const Content = styled.div`
    width: 100%;
    margin: auto;
    
`;



function Layout({ children }) {

    useEffect(() => {
        setTimeout(() => {
            document.body.style.transition = "all 0.50s linear";
        }, 1000);
    }, [])

    return (
        <Container>
            <ThemeProvider theme={light}>
                <GlobalStyles />
                <Content>
                    {children}
                </Content>
            </ThemeProvider>
        </Container>
    );
}

export default Layout;