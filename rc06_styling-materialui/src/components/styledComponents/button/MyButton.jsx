import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.renk ? "red" : "green" };
    
    color: white;
    width: 200px;
    font-size: 20px;
    padding: 10px;
    margin: 10px;
    border-radius: 3px;
    cursor: pointer;
    `;
