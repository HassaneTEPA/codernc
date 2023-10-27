"use client";

import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import JobCard from "../components/jobcard";

import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Home() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/offers")
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Trouvez Votre Prochain Job de Développeur en Nouvelle-Calédonie
      </h1>
      <p className="text-xl font-light">Dernières offres d'emploi</p>
      <Divider className="my-4" />
      <div className="grid grid-cols-3 gap-4">
		{
			offers.map(
				(jobdata, i) => <JobCard key={i} job_data={jobdata} />
			)
		}
      </div>
      <div className="w-full my-4">
        <Button variant="light" className="w-full" color="primary">
          + Plus d'offres d'emploi
        </Button>
      </div>
    </div>
  );
}
