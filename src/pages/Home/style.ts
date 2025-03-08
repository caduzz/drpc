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
                display: flex;
                
                button {
                    margin-top: 15px;
                    padding: 0.75rem;
                    border-radius: 6px;
                    background-color: #09090B;
                    color: #ffffff;
                    border: .01rem solid #ddd1;
                    cursor: pointer;
                    transition: .3s;
                }
                
                button:hover {
                    background-color: #333;
                }
            }
        }
    }
`