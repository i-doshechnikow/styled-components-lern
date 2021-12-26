import { StyledCard } from "./styles/Card.styled";

const Card = (props) => {
  const {
    item: { id, title, body, image },
  } = props;

  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};

export default Card;
