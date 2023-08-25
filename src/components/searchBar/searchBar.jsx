import { useEffect, useState } from "react";
import { Input, SearchIcon, Button } from "../../styles/styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/slicers/dataSlice";
import { setValue } from "../../redux/slicers/searchValueSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SearchBar() {
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

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [reposFilter, setreposFilter] = useState("desc");

  function Filter() {
    if (reposFilter === "desc") {
      setreposFilter("asc");
    } else {
      setreposFilter("desc");
    }
  }
  const data = useSelector((state) => state.data);
  const usersPerPage = 30;
  const totalUsers = data.total_count;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const apiBaseUrl = "https://api.github.com";

  function getData() {
    const searchUsersUrl = `${apiBaseUrl}/search/users?q=${inputValue}&sort=repositories&order=${reposFilter}&per_page=${usersPerPage}&page=1`;

    axios.get(searchUsersUrl).then(
      (response) => {
        const usersData = response.data;

        dispatch(setData(usersData));
        if (usersData.total_count === 0) {
          notify("Нет результатов поиска", "warn");
        }
      },
      (error) => {
        if (error.request.status === 422) {
          notify("Ведите имя пользователя", "error");
        }
        if (error.request.status === 403) {
          notify(
            "Вы сделали слишком много запросов, сервер не отвечает",
            "error"
          );
        }
      }
    );
  }

  function setSearchValue() {
    dispatch(setValue(`q=${inputValue}`));
  }

  function onSearchIconHandleClick() {
    setSearchValue();
    getData();
  }

  useEffect(() => {
    if (totalPages >= 20) {
      notify("Слишком много результатов поиска, Уточните запрос!", "info");
    }
  }, [totalPages]);

  return (
    <div style={{ display: "flex" }}>
      <form
        style={{ height: "41px", alignItems: "center" }}
        onSubmit={(event) => {
          event.preventDefault();
          setSearchValue();
          getData();
        }}
      >
        <div style={{ position: "relative", width: "318px" }}>
          <Input
            placeholder="search user"
            onInput={(event) => {
              setInputValue(event.target.value);
            }}
          ></Input>
          <SearchIcon
            onClick={() => {
              onSearchIconHandleClick();
            }}
          />
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </form>
      <Button
        onClick={(event) => {
          event.preventDefault();
          Filter();
        }}
      >
        {reposFilter === "desc" ? "repos⇧" : "repos⇩"}
      </Button>
    </div>
  );
}

export default SearchBar;
