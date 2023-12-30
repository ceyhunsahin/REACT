
import styled, {css} from "styled-components";

export default styled.a`
    font-size: 30px;
    font-weight: bold;
    margin: 10px;
    text-decoration: none;
    &:hover{
        color:${(props) => props.linkRenk ? "blue" : "green"}
    };


    ${(props) => props.secondary && css`
    background-color:orange;
    border-radius:4px`}


    `;
    /**
    |--------------------------------------------------
    | yukarida {css} olarak cagirir ve css'i de manipule edebiliriz
    |--------------------------------------------------
    */