"use client";

import { useState } from "react";

import { Person, PersonApiResponse } from "../_types";

export default function DynamicSection() {
  const [person, setPerson] = useState<Person | undefined>();

  const getRandomPerson = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data: PersonApiResponse) => {
        console.log("random person:", data);

        setPerson(data.results[0]);
      });
  };

  return (
    <div className="border bg-white px-5 py-2 rounded-full">
      <button onClick={getRandomPerson}>Call random person API - </button>
      &nbsp;
      <span className="font-bold">{person?.name.first ?? "?"}</span>
    </div>
  );
}
