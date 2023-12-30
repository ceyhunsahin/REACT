
import {Button} from "./button/MyButton";
import Header from "./header/header";
import Link from "./Link/Link";

function StyledComponents() {
    return (
        <div>
        <Header Baslikrenk = "red">Styled Components</Header>
        <Link href = ">www.Clarusway.com" target="_blank" rel="noopener" linkRenk secondary>clarusway</Link>
            <Header Baslikrenk = "green">Styled Components</Header>
            <Button >Hello</Button>
            <Button renk  = "false" >Hello</Button>
        </div>
    )
} 

export default StyledComponents
