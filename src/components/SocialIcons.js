import { FaTwitter, FaFacebook, FaLinkedin, FaVk } from "react-icons/fa";
import { SocialIconsStyled } from "./styles/SocialIcon.styled";

export const SocialIcons = () => {
  return (
    <SocialIconsStyled>
      <li>
        <a href="#">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="#">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="#">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="#">
          <FaVk />
        </a>
      </li>
    </SocialIconsStyled>
  );
};
