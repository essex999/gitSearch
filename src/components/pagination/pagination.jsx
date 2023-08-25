import "./pagination.css";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slicers/currentPageSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { setData } from "../../redux/slicers/dataSlice";

export default function PaginationBar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const totalUsers = data.total_count;
  const usersPerPage = 30;
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  function handlePageClick(selectedPage) {
    dispatch(setCurrentPage(selectedPage));
  }

  const [isRequest, setIsRequest] = useState(false);
  const page = useSelector((state) => state.page);
  const searchQuery = useSelector((state) => state.value);
  const apiBaseUrl = "https://api.github.com";

  useEffect(() => {
    const searchUsersUrl = `${apiBaseUrl}/search/users?${searchQuery}&per_page=${usersPerPage}&page=${page}`;
    if (isRequest === true) {
      axios.get(searchUsersUrl).then(
        (response) => {
          const usersData = response.data;
          dispatch(setData(usersData));
        },
        (error) => {
          console.log(error);
          console.log(searchUsersUrl);
          console.log(searchQuery);
        }
      );
    }
  }, [isRequest, page, searchQuery, dispatch]);

  function scrollToTop() {
    window.scrollTo({
      top: 220,
      behavior: "smooth",
    });
  }

  return (
    <Stack style={{ marginBottom: "40px" }} spacing={2}>
      <Pagination
        onChange={(event, page) => {
          handlePageClick(page);
          setIsRequest(true);
          scrollToTop();
        }}
        count={totalPages > 20 ? 20 : totalPages || 1}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
