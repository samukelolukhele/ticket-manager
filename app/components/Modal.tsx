"use client";
import React from "react";
import CreateTicketForm from "./CreateTicketForm";
import CreateCategoryForm from "./CreateCategoryForm";

type Props = {
  formType: "TICKET" | "CATEGORY" | string;
};

const Modal = ({ formType }: Props) => {
  return (
    <div className="modal text-dark" tabIndex={-1} id="formModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Ticket</h5>
            <button
              type="button"
              className="btn btn-danger btn-sm close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {formType === "TICKET" ? (
              <CreateTicketForm />
            ) : (
              <CreateCategoryForm />
            )}
          </div>
          {/* <div className="modal-footer">
            <input
              type="submit"
              className="btn btn-primary"
              value={` Create ${formType === "TICKET" ? "Ticket" : "Category"}`}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
