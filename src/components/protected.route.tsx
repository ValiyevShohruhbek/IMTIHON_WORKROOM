import React, { useEffect } from "react";
import useCheckAuth from "../hooks/requests/useCheckAuth";
import { Navigate } from "react-router-dom";
import BounceLoading from "./ui/BounceLoading";
interface Props {
  children: React.ReactNode;
}

const ProtectedRouteComponent = ({ children }: Props) => {
  const { isSuccess, data, isFetching } = useCheckAuth();

  const status = data?.data;

  return <>{isSuccess && status ? children : <Navigate to={"sign-in"} />}</>;
};

export default ProtectedRouteComponent;
