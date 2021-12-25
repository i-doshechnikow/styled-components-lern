import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              impedit alias aut rerum itaque cum nulla deleniti recusandae ut
              fuga officiis eos ullam dolore hic et perspiciatis nam illum
              maxime.
            </p>

            <Button bg="#ff0099" color="white">
              Get Started
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};
