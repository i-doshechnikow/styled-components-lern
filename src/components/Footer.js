import { SocialIcons } from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export const Footer = (props) => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ea
              tempore doloremque assumenda dolore dignissimos praesentium?
              Suscipit ab cupiditate laborum!
            </li>
            <li>+1 234 567 890</li>
            <li>example@example.com</li>
          </ul>
          <ul>
            <li>About</li>
            <li>What we do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
