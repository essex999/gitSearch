import { styled } from "styled-components";
import { ReactComponent as ArrowSvg } from "../assets/back-arrow-svgrepo-com.svg";
import { ReactComponent as SearchSvg } from "../assets/search-svgrepo-com.svg";
export const Input = styled.input`
  height: 41px;
  width: 288px;
  border: 2px solid #ca58bf;
  border-radius: 20px;
  background-color: transparent;
  box-sizing: border-box;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  padding-left: 32px;
  padding-right: 32px;
  box-sizing: border-box;
  &::after {
  }
  &::placeholder {
    color: #8d989c;
  }
`;

export const AppStyle = styled.div`
  display: flex;
  padding-top: 240px;
  flex-direction: column;
  align-items: center;
  padding-top: 240px;
`;

export const UserElement = styled.div`
  height: 250px;
  width: 400px;
  border: black 1px solid;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  margin: 50px;
  height: 200px;
  width: 280px;
  border: none;
  background-color: #7e3b77;
  box-shadow: 0px 0px 39px 16px rgba(126, 59, 119, 1);
  perspective: 1000px;
`;

export const CardBody = styled.div`
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.4s;
transform-style: preserve-3d;
perspective: 1000px;

  }
`;

export const UserCardFrontSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: #ca58bf;
  color: #d853cc;
`;

export const UserCardBackSide = styled.div`
  background-color: #ca58bf;
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
`;
export const UserName = styled.div`
  background-color: #ca58bf;
`;

export const UserData = styled.div`
  background-color: #ca58bf;
`;

export const Image = styled.div`
  display: flex;
  background-color: #ca58bf;
  align-content: space-around;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-bottom: 2px;
`;

export const AvatarImg = styled.img`
  border-radius: 50px;
  height: 100px;
  width: 100px;
  margin-top: 4px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ca58bf;
`;

export const Button = styled.button`
  font-family: "Prompt", sans-serif;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  background: none;
  &:hover {
    color: #ca58bf;
  }
`;

export const GoBackSvg = styled(ArrowSvg)`
  height: 20px;
  width: 20px;
  fill: black;
  background-color: #ca58bf;
  padding-bottom: 38px;
`;
export const SearchIcon = styled(SearchSvg)`
  height: 20px;
  width: 20px;
  fill: white;
  position: absolute;
  transform: translateX(-40px);
  top: 10px;

  cursor: pointer;

  &:active {
    fill: #ca58bf;
  }
`;
