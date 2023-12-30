
import styled from "styled-components";

/**
|--------------------------------------------------
| here, we can use Header without const or let
|--------------------------------------------------
*/

export default styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin: 10px;
    color:${(props) => props.Baslikrenk || "yellow"}
    `;

/* export default styled.div`
    font-size: 30px;
    font-weight: bold;
    margin: 10px;
    color:${(props) => props.Baslikrenk || "yellow"}
    `; */