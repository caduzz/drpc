import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin: 0 auto;
  border-radius: 6px;
  gap: 1rem;

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
`;