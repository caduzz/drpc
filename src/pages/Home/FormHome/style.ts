import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin: 0 auto;
  border-radius: 6px;
  flex-direction: column;
  display: flex;
  gap: 1rem;

  .subHeader {
    padding-bottom: 2rem;
    width: 100%;
    border-bottom: .01rem solid #ddd1;

    h2 {
      font-size: 1rem;
      color: #ffffff;
    }
    p {
      font-size: .8rem;
      color:#8A8A93;
      margin-top: 5px;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .formArea {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      .inputForm {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .inputField {
          label {
            color: #f1f1f1;
            font-size: 14px;
            font-weight: 500;
          }

          input {
            width: 100%;
            padding: .6rem .8rem;
            border: .01rem solid #ddd1;
            border-radius: 6px;
            font-size: .8rem;
            background-color: #09090B;
            color: #fff;
            margin-top: .5rem;

            :focus {
              border-color: #ffffff;
              outline: none;
            }

            ::placeholder {
              font-size: 14px;
              color: #8A8A93;
            }
          }

          p {
            font-size: 12px;
            color: #8A8A93;
            margin-top: .5rem;
          }

          span {
            color: red;
            font-size: 0.875rem;
          }
        }
      }
    }
  }

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

  .formDataList {
    width: 100%;
    margin-top: 2rem;
    
    h2 {
        color: #f1f1f1;
        font-size: 14px;
        font-weight: 500;
    }
    ul {
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
            &.selected {
                border-color: #ffffff;
                background-color: #333;
            }
            strong {
                color: #fff;
            }
        }
    }
  }
  .clientId {
      filter: blur(3px);
      transition: .4s;
      :hover {
          filter: blur(0px);
      }
  }

  .actionsArea {
    display: flex;
    width: 100%;
    gap: 1rem;
    width: 100%;
  }
`;