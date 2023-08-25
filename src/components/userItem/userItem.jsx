import {
  CardBody,
  UserCardBackSide,
  GoBackSvg,
  UserCardFrontSide,
  Image,
  AvatarImg,
  Buttons,
  Button,
  UserName,
  UserData,
} from "../../styles/styles.jsx";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserItem(props) {
  const [data, setData] = useState("");
  const [isRotated, setIsRotated] = useState(false);
  const toggleRotation = () => {
    setIsRotated((prevRotated) => !prevRotated);
  };
  function notify(text, alert) {
    toast[alert](text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function getData() {
    axios.get(props.url).then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        if (error.request.status === 403) {
          notify(
            "Вы сделали слишком много запросов, сервер не отвечает",
            "error"
          );
        }
      }
    );
  }
  const DynamicAvatar = ({ imageUrl }) => {
    return <AvatarImg src={imageUrl} alt="Dynamic Image" />;
  };

  return (
    <CardBody style={isRotated ? { transform: "rotateY(180deg) " } : {}}>
      <UserCardFrontSide>
        <Image>
          <DynamicAvatar imageUrl={props.photo}></DynamicAvatar>
          <UserName>{props.user}</UserName>
        </Image>

        <Buttons>
          <a
            href={`${"https://github.com/"}${props.user}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#ca58bf" }}
          >
            view github profile
          </a>
          <Button
            onClick={() => {
              getData();
              toggleRotation();
            }}
          >
            details
          </Button>
        </Buttons>
      </UserCardFrontSide>
      <UserCardBackSide>
        <GoBackSvg
          onClick={() => {
            toggleRotation();
          }}
        ></GoBackSvg>

        <UserData>Public Repos:{data.public_repos}</UserData>
        <UserData>Folowers:{data.followers}</UserData>
        <UserData>Following:{data.following}</UserData>
        <UserData>Created at:{data.created_at}</UserData>
      </UserCardBackSide>
    </CardBody>
  );
}

export default UserItem;
