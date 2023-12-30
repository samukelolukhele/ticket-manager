import React from "react";
import useData from "./hooks/useData";

type Props = {};

const CreateTicketForm = (props: Props) => {
  const { statuses, categories } = useData();

  return (
    <form>
      <div className="form-group">
        <label htmlFor="ticketTitle">Title</label>
        <input type="text" className="form-control" id="ticketTitle" />
      </div>
      <div className="form-group">
        <label htmlFor="ticketDesc">Description</label>
        <textarea rows={3} className="form-control" id="ticketDesc" />
      </div>
      <div className="d-flex flex-column mt-4">
        <p>Priority</p>
        <div className="d-flex gap-2">
          <div className="form-check">
            <input
              type="radio"
              name="ticketPriority"
              className="form-check-input"
              id="ticketPriority1"
              value={1}
            />
            <label className="form-check-label" htmlFor="ticketPriority1">
              1
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="ticketPriority"
              className="form-check-input"
              id="ticketPriority2"
              value={2}
            />
            <label className="form-check-label" htmlFor="ticketPriority2">
              2
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="ticketPriority"
              className="form-check-input"
              id="ticketPriority3"
              value={3}
            />
            <label className="form-check-label" htmlFor="ticketPriority3">
              3
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="ticketPriority"
              className="form-check-input"
              id="ticketPriority4"
              value={4}
            />
            <label className="form-check-label" htmlFor="ticketPriority4">
              4
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="ticketPriority"
              className="form-check-input"
              id="ticketPriority5"
              value={5}
            />
            <label className="form-check-label" htmlFor="ticketPriority5">
              5
            </label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="ticketCategory">Category</label>
        <select
          className="form-control"
          name="ticketCategory"
          id="ticketCategory"
        >
          <option disabled selected value="">
            Select a category
          </option>
          {categories.data &&
            categories.data.map((category) => (
              <option value={category.id}>{category.title}</option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="ticketStatus">Status</label>
        <select
          value="default"
          className="form-control"
          name="ticketStatus"
          id="ticketStatus"
        >
          <option disabled value="default">
            Select current ticket status
          </option>
          {statuses.data &&
            statuses.data.map((status) => (
              <option value={status.id}>{status.title}</option>
            ))}
        </select>
      </div>
    </form>
  );
};

export default CreateTicketForm;
