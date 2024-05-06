import React, { useState } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { dimensions, maxWidth } from "../helper";
import { Link } from 'react-router-dom';
import Output from './UploadComponents/Output';
import Examples from './UploadComponents/Examples';

const Container = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    position: relative;
    justify-content: stretch;

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        justify-content: auto;
        display: block;
        min-height: 0px;
    }
`;

const UploadContainer = styled.section`
    width: 45%;
    min-height: 100vh;
    display: flex;
    padding: 50px;
    box-sizing: border-box;
   

    h2 {
        margin: 0px 0px 30px 0px;
        color: white;
    }

    .content {
        padding: 20px 50px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        min-height: 70vh;
        width: 100%;
    }

    @media (max-width: ${dimensions.lg}) {
        padding: 10px;
        width: 30%;

        h2 {
            margin: 0px 0px 10px 0px;
        }

        .content {
            padding: 20px;
            min-height: 50vh;
        }
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        min-height: 50vh;

        .content {
            padding: 20px;
        }
    }
`;

const ImageContainer = styled.section`
    width: 55%;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 50px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.lg}) {
        padding: 10px;
        width: 70%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

const UploadInput = styled.div`
    width: 100%;
    flex: 1;
    border-radius: 6px;
    background-color: white;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    input[type="file"] {
        display: none;
    }

    .custom-file-upload {
        cursor: pointer;
        width: 90%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img {
            margin-bottom: 30px;
            width: 120px;
        }

        .message {
            width: 100%;
            min-height: 150px;
            border: 2px dashed;
            border-color: ${({ theme }) => theme.secundary};
            display: flex;
            align-items: center;
            justify-content: center;
            color: #777;
            text-align: center;
        }
    }

    @media (max-width: ${dimensions.lg}) {
        padding: 10px;

        .custom-file-upload {
           
            img {
                width: 80px;
            }
        }

        .message { 
            min-height: 100px;
            padding: 10px;
            box-sizing: border-box;
            
        }
    }

    @media (max-width: ${dimensions.md}) {
        .custom-file-upload {
            img {
                width: 80px;
            }
        }

        .message { 
            min-height: 70px;
            
        }
    }
`;
function Upload() {
    const [hasFile, setHasFile] = useState(false)
    const [file, setFile] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [predictions, setPredictions] = useState({})

    const onFileChange = (event, type) => {
        setLoading(true)
        setPredictions({})
        const formData = new FormData();

        if (type == "example") {
            setFile(event.target.src);
            formData.append(
                "file",
                event.target.id.toString()
            );

        } else {
            setFile(URL.createObjectURL(event.target.files[0]));

            formData.append(
                "file",
                event.target.files[0],
                event.target.files[0].name
            );
        }
        formData.append("type", type);


        axios.post("https://wave-labs.org/api/arquivo/upload", formData).then((response => {

            var predictionString = response.data;

            setPredictions(JSON.parse(predictionString.replace(/["']/g, "\"")))
            setLoading(false)
            setHasFile(true)
        })).catch((err) => {
            console.log(err)

            setPredictions({})
            setLoading(false)
        });
    };

    return (
        <Container>
            <UploadContainer>
                <div className='content'>
                    <h2>{hasFile ? "Submeta outra imagem" : "Submeta uma imagem"}</h2>

                    <UploadInput>
                        <label for="file-upload" class="custom-file-upload">
                            <img src="/icons/upload.svg" alt="" />
                            <div className='message'> Arraste um ficheiro ou selecione uma imagem</div>

                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            onChange={(e) => onFileChange(e, "submit")}
                        />
                    </UploadInput>
                </div>
            </UploadContainer>
            <ImageContainer>
                {loading || hasFile ? <Output predictions={predictions} preview={file} loading={loading} /> : <Examples onFileChange={onFileChange} setHasFile={setHasFile} />}

            </ImageContainer>
        </Container>
    )
}

export default Upload