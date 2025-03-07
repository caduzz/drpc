import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    height: 100%;
    background: #09090B;
    overflow: auto;
    .main {
        padding: 2rem;
        
        .container {
            padding: 2rem;
            
            border-radius: 10px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            border: .01rem solid #ddd1;

            .content {
                width: 100%;
            }

            .formDataList {
                width: 40%;
                ul {
                    margin-top: 2rem;
                    list-style: none;
                    padding: 0;
                    li {
                        padding: 0.6rem 0.8rem;
                        margin-bottom: 0.5rem;
                        border: .01rem solid #ddd1;
                        border-radius: 6px;
                        background-color: #09090B;
                        color: #fff;
                        cursor: pointer;
                        transition: background-color 0.3s;
                        &:hover {
                            background-color: #333;
                        }
                        strong {
                            color: #fff;
                        }
                    }
                    .selected {
                        border-color: #ffffff;
                        background-color: #333;
                    }
                }
            }
        }
    }
`