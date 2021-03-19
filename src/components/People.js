import React from "react";
import PeopleSearch from "./component/PeopleSearch";
import PeopleList from "./component/PeopleList";

function People({ people }) {
  return (
    <>
      <PeopleSearch onSearch={console.log} />
      <PeopleList people={people} />
    </>
  );
}

export default People;
