"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import axios from "axios";
import Loader from "../component/Loader/Loader";
import getRandomColor from "../component/randomcolor/RandomColor";



export default function index() {
  const router = useRouter();
  const id = router.query.id;
  const [user, setuser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getdata = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `https://swapi.dev/api/people/${router.query.id}`
          );

          setuser(response.data);
          setflims(response.data.films);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Call the function to fetch data for all films

    getdata();
  }, [id]);

  return (
    <>
      {user ? (
        <div className="flex">
          <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
            {/* <!-- Sidebar content here --> */}

            <div className="p-4 mt-6">
              <div
                className="w-28 h-28 rounded flex justify-center items-center text-white  rounded-full border border-8 border-color-white mx-auto my-0 opacity-90"
                style={{ backgroundColor: getRandomColor() }}
              >
                <strong>{user.name.charAt(0)}</strong>
              </div>

              
              <h3 className="text-2xl font-bold text-center mt-5">{user.name}</h3>
              <p className="pt-5 text-center">
                <strong>Male</strong>
              </p>
              <p className="pt-5 text-center">
                <strong>1998</strong>
              </p>
            </div>
          </div>

          <div className="main w-full">
            <div className="bg-orange-500">
              <h2 className="py-5 pl-4 text-lg text-white flex justify-between">
                <strong>User Details</strong>
                <button className="inline-block me-4 align-middle text-center rounded py-1 px-3   dark:bg-gray-700 text-white ">
                  <Link href="/user" className="flex gap-4 items-center">
                    {" "}
                    <BsArrowLeft /> Back
                  </Link>
                </button>
              </h2>
            </div>
            <h2 className="p-4 text-lg">
              <strong>Characteristic</strong>
            </h2>
            <div className="grid grid-cols-3 gap-3 px-5">
              <div
                className="card  bg-base-100 border border-gray-300 rounded-md  border-solid p-7      
"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Height :{" "}
                      <span className="text-orange-500">{user.height} cm</span>{" "}
                    </strong>
                  </h5>
                </div>
              </div>

              <div
                className="card  bg-base-100 border border-gray-300 rounded-md  border-solid p-7      
"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Mass :{" "}
                      <span className="text-orange-500">{user.mass} Kg</span>{" "}
                    </strong>
                  </h5>
                </div>
              </div>
              <div
                className="card  bg-base-100 border border-gray-300 rounded-md  border-solid p-7      
"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Hair Color :{" "}
                      <span className="text-orange-500">{user.hair_color}</span>{" "}
                    </strong>
                  </h5>
                </div>
              </div>
              <div
                className="card  bg-base-100 border border-gray-300 rounded-md  border-solid p-7      
"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Skin Color :{" "}
                      <span className="text-orange-500">{user.skin_color}</span>{" "}
                    </strong>
                  </h5>
                </div>
              </div>
              <div
                className="card  bg-base-100 border border-gray-300 rounded-md  border-solid p-7      
"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Eye Color :{" "}
                      <span className="text-orange-500">{user.eye_color}</span>{" "}
                    </strong>{" "}
                  </h5>
                </div>
              </div>
              
            </div>
            <hr className="mt-5" />
            <h2 className="p-4 text-lg">
              <strong className="">Movies</strong>
            </h2>
            <div className="grid grid-cols-3 gap-3 px-5">
              <div
                className="card  bg-base-100 border border-gray-300 rounded-md  border-solid p-7      
"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Movie name : <span className="text-orange-500">red</span>
                    </strong>
                  </h5>
                  <p>
                    <strong>
                      Directer : <span className="text-orange-500">prem</span>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Producer : <span className="text-orange-500">prem</span>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Release date :{" "}
                      <span className="text-orange-500">prem</span>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
