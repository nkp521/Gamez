import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div className="text-center p-10">
        <h1 className="text-8xl font-bold ">🚨</h1>
        <br />
        <p className="text-lg">Nothing to see here. Go back to the Arcade</p>
        <br />
        <p>{error.message || error.statusText}</p>
      </div>
    </>
  );
};

export default ErrorPage;
