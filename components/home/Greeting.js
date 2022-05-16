import GreetingText from "./greetingComponents/GreetingText";
import Profession from "./greetingComponents/Profession";
import Technologies from "./greetingComponents/Technologies";
import javascript from "../../public/logos/javascript.svg"
import react from "../../public/logos/react.svg"
import Container from "./greetingComponents/Container";

const Greeting = ()=>{

    return(
        <Container>

            <GreetingText>
                HOLA,<br/>
                SOY ALEX,<br/>
                WEB DEVELOPER
            </GreetingText>

            <Profession>
                Front End Developer / <span>React</span> 
            </Profession>

            <Technologies 
            tech={[
                {img:javascript, styles:'js'},
                {img:react, styles:'react'}
            ]}
            />
            
        </Container>
    )
}

export default Greeting