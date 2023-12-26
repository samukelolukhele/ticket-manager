import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const dashboard = async (props: Props) => {
  const { isAuthenticated } = getKindeServerSession();

  return <div className="">dashboard</div>;
};

export default dashboard;
