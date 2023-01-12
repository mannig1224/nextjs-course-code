import React from "react";
import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log("This is the query", router.query);
  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
