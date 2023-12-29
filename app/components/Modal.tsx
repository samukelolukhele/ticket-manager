"use client";
import React from "react";
import CreateTicketForm from "./CreateTicketForm";

type Props = {};

const Modal = (props: Props) => {
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
            <CreateTicketForm />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Create Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
