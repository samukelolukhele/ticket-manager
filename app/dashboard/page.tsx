"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { useQuery } from "@tanstack/react-query";
import useData from "../components/hooks/useData";

type Props = {};

const dashboard = (props: Props) => {
  const { user, isLoading: userLoading } = useKindeBrowserClient();
  const [modal, setModal] = useState("TICKET");

  return (
    <div className="dark-bg fluid min-vh-100 text-light ">
      <Modal formType={modal} />
      <div className="container pt-4">
        <div className="d-flex fluid justify-content-between align-items-center">
          {userLoading ? (
            <div className="spinner-border">
              {/* <span className="sr-only">Loading...</span> */}
            </div>
          ) : (
            <h5>Welcome, {user?.given_name}</h5>
          )}
          <div className=" gap-4 d-flex">
            <button
              className="btn btn-md btn-primary"
              data-target="#formModal"
              data-toggle="modal"
              onClick={() => setModal("TICKET")}
            >
              Create Ticket <i className="bi bi-plus"></i>
            </button>
            <button
              className="btn btn-md btn-light"
              data-target="#formModal"
              data-toggle="modal"
              onClick={() => setModal("CATEGORY")}
            >
              Create Category <i className="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
