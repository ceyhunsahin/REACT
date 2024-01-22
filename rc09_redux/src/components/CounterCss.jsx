import styled, {css} from "styled-components";
export const Page = styled.div`
    
    
    `;
export const Button = styled.button`
    background-color: ${props => (props.renk) ? "green" : (props.renkres) ? 'blue' :  "red" };
    
    color: white;
    width: 200px;
    font-size: 20px;
    padding: 10px;
    margin: 10px;
    border-radius: 3px;
    cursor: pointer;
    `;