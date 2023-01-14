import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../common/PageTitle";
import Timer from "../common/gadgets/Timer";

const EmployeePage = () => {
  let { id } = useParams();

  const log2ndTimeReset = (timerValueBeforeReset: number) => {
    console.log("2ndTimer has reset! with value" + timerValueBeforeReset);
  };

  return (
    <>
      <PageTitle title="Employee Page" />
      You have been looking at this page for:{" "}
      <Timer onReset={log2ndTimeReset} />
      <div>id={id}</div>
    </>
  );
};

export default EmployeePage;
