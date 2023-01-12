import React from "react";
import { useRouter } from "next/router";
function ClientProjectsPage() {
  const router = useRouter();
  console.log("This is the query", router.query);
  const loadProjectHandler = () => {
    console.log(router.query);
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: router.query.id, clientprojectid: "projectA" },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
