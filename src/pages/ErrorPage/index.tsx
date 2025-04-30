import React from "react";
import styled from "./ErrorPage.module.scss";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const routError = isRouteErrorResponse(error);
  console.log("route error : ", routError);

  return (
    <div className={styled.mainContent}>
      <div className={styled.textContent}>
        <h1>OOOOPSS!!</h1>
        <h2>{isRouteErrorResponse(error) ? "ERROR 404" : null}</h2>
      </div>

      <div className={styled.imageContent}></div>

      <div className={styled.bottomContent}>
        <p>
          {isRouteErrorResponse(error)
            ? "PAGE NOT FOUND :("
            : "SOMETHING BAD HAPPENED"}
        </p>
        <Link className={styled.links} to="/">
          Back to Home Page.
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
