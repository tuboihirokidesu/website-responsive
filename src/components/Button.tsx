import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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

  :root {
    --primary: #fff;
  }

  .btn--primary {
    background-color: var(--primary);
    color: #242424;
    border: 1px solid var(--primary);
  }

  .btn--outline {
    background-color: transparent;
    color: #fff;
    padding: 8px 20px;
    border: 1px solid var(--primary);
    transition: all 0.3s ease-out;
  }

  .btn--medium {
    padding: 8px 20px;
    font-size: 18px;
  }

  .btn--large {
    padding: 12px 26px;
    font-size: 20px;
  }

  .btn--mobile {
    text-align: center;
    border-radius: 4px;
    width: 80%;
    text-decoration: none;
    font-size: 1.5rem;
    background-color: transparent;
    color: #fff;
    padding: 14px 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;
  }

  .btn--wide {
    padding: 12px 64px;
    font-size: 20px;
  }

  .btn--large:hover,
  .btn--medium:hover,
  .btn--mobile:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: #242424;
  }

  .btn--wide:hover {
    color: #fff;
    background-color: #f00946;
    transition: all 0.2s ease-out;
  }

  .btn-link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
  }

  .blue {
    background-color: #276afb;
    color: #fff;
    border: none;
  }

  .red {
    background-color: #f00946;
    color: #fff;
    border: none;
  }

  .primary {
    background-color: #242424;
    color: #fff;
    border: none;
  }

  .primary:hover {
    background-color: #fff;
    color: #242424;
    border: none;
  }

  .green {
    background: #25ce4a;
    color: #fff;
    border: none;
  }

  .green:hover {
    background-color: #242424;
  }

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
