import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import { CategoryModel } from "@/types/models";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import useForm from "./hooks/useForm";
import axios from "axios";
import { toast } from "react-toastify";

const CreateCategoryForm = () => {
  const initialState = {
    title: "",
    description: "",
  };
  const query = useFetch();
  const { state, bind } = useForm(initialState);
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async () => {
      console.log("Loading...");
      console.log(state);
      return await axios.post("/api/category", {
        title: state.title,
        description: state.description,
      });
    },
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    return mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="categoryTitle">Title</label>
        <input
          {...bind}
          type="text"
          name="title"
          className="form-control"
          id="categoryTitle"
        />
      </div>
      <div className="form-group">
        <div className="form-group">
          <label htmlFor="ticketDesc">Description</label>
          <textarea
            {...bind}
            rows={3}
            name="description"
            className="form-control"
            id="ticketDesc"
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value={`Create Category`}
        />
      </div>
      {isPending && toast("Uploading...")}
      {isSuccess && toast.success("Category created successfully")}
    </form>
  );
};

export default CreateCategoryForm;
