import styled from "styled-components";

export const RichListContainer = styled.div`
  padding-block: 2rem;
  padding-left: 2rem;
  width: 50%;
  
  ul {
    list-style: none;
    padding-top: 0.5rem;
    li {
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      
      padding: 0.5rem;
      
      margin-bottom: 0.5rem;
      border: .01rem solid #ddd1;
      border-radius: 6px;
      
      background-color: #09090B;

      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s;

      .items {
        display: flex;
        flex-direction: column;
      }

      &:hover {
        background-color: #333;
      }

      &.selected {
        border-color: #ffffff;
      }

      .btnDelete {
        position: absolute;
        padding: .4rem;
        top: -10px;
        right: 5px;

        :hover {
          background-color:#fe3e3e;
        }
      }
    }
  }

  .clientId {
    filter: blur(4px);
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

  .rpcStatus {
    color: #4caf50;
    font-weight: bold;
    margin-top: 1rem;
    p {
      margin: 0;
    }
  }
`;