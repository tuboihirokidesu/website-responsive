import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
  buttonStyle: string;
  buttonSize: string;
  buttonColor: string;
};

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large", "btn-mobile", "btn-wide"];
const COLOR = ["primary", "blue", "red", "green"];

const Button: React.FC<Partial<Props>> = ({
  buttonColor,
  buttonSize,
  type,
  buttonStyle,
  children,
  onClick,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle!)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize!) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor!) ? buttonColor : null;

  return (
    <BtnMobile to='/sign-up' className='btn-mobile'>
      <Btn
        className={`${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </Btn>
    </BtnMobile>
  );
};

export default Button;

const Btn = styled.button`
  padding: 8px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 6px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const BtnMobile = styled(Link)`
  @media screen and (max-width: 960px) {
    display: block;
    text-decoration: none;
  }
`;
