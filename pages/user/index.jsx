"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../component/Loader/Loader";
import { AiOutlineHeart, AiFillEye, AiTwotoneHeart } from "react-icons/ai";
import Link from "next/link";
import Pagination from "../component/Paginations/Pagination";
import getRandomColor from "../component/randomcolor/RandomColor";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../feature/favoritesSlice";

export default function index() {
  const [user, setuser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorite, setfavorite] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${currentPage}`
        );
        setuser(response.data.results);
        setLoading(false);
        if (typeof window !== "undefined") {
          const storedFavorites = localStorage.getItem("favorite");
          setfavorite(storedFavorites ? JSON.parse(storedFavorites) : []);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRandomColor();
    getdata();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setLoading(!loading);
    setCurrentPage(newPage);
  };

  const handleAddToFavorites = (user) => {
    dispatch(addToFavorites(user));
    setfavorite((data) => {
      return [...data, user];
    });
    favorite.push(user);
    localStorage.setItem("favorite", JSON.stringify(favorite));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-wrap mt-5 justify-center">
            {user ? (
              user.map((user, index) => {
                return (
                  <div
                    key={index}
                    className="font-sans lg:w-1/4 pr-4 pl-4 md:w-1/2  mb-4 relative flex justify-center items-center
            "
                  >
                    <div className="max-w-xs  bg-white shadow-lg rounded-bl-xl rounded-br-xl shadow-xl overflow-hidden ">
                      <div className="flex justify-center bg-orange-400 h-32 rounded-tl-2xl rounded-tr-2xl">
                        <div
                          className="flex justify-end w-full"
                          onClick={() => handleAddToFavorites(user)}
                        >
                          {favorite?.length > 0 &&
                          favorite?.filter((data) => data?.name === user?.name)
                            ?.length > 0 ? (
                            <AiTwotoneHeart className="me-4 mt-4 text-white w-5 h-5" />
                          ) : (
                            <AiOutlineHeart className="me-4 mt-4 text-white w-5 h-5" />
                          )}
                        </div>
                      </div>
                      <div className="text-center mt-4 p-4">
                        <div
                          className="w-28 h-28 rounded flex justify-center items-center text-white absolute top-20 left-1/2 transform translate-x-[-50%] rounded-full border border-8 border-color-white"
                          style={{ backgroundColor: getRandomColor() }}
                        >
                          <strong>{user.name.charAt(0)}</strong>
                        </div>

                        <h3 className="font-medium mt-10 mb-5">{user.name}</h3>

                        <div className="flex flex-wrap gap-4 justify-center">
                          <span className="p-1 px-2 rounded  border-gray-300 border">
                            {user.hair_color}
                          </span>
                          <span className="p-1 px-2 rounded  border-gray-300 border">
                            {user.skin_color}
                          </span>
                          <span className="p-1 px-2 rounded  border-gray-300 border">
                            {user.eye_color}
                          </span>
                          <span className="p-1 px-2 rounded  border-gray-300 border">
                            {user.birth_year}
                          </span>
                          <span className="p-1 px-2 rounded  border-gray-300 border">
                            {user.gender}
                          </span>
                          <span className="p-1 px-2 rounded  border-gray-300 border">
                            green{" "}
                          </span>
                        </div>
                        <button className="rounded-2xl px-5 py-2 text-white my-4 w-full bg-orange-500">
                          <Link
                            href={`/user/${index + 1}`}
                            className="w-full block "
                          >
                           
                            <div className="flex justify-center items-center gap-3">
                              <AiFillEye />{" "}
                              View
                            </div>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <Loader />
            )}
          </div>

          {/* // paginations  */}

          <div className="my-5">
            <Pagination
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </>
  );
}

export { getRandomColor };
