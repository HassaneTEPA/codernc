"use client";

import React from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Divider} from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { JobCard } from "@/types";
import {Chip} from "@nextui-org/chip";

export default function JobCard({job_data}: JobCard) {
  console.log(job_data)
  const getJobEducationPreferences = () => {
    if (job_data.education_level) {
      return job_data.education_level
    }
    return job_data.diplome
  }
  const getJobDriverLicenseRequirements = () => {
    if (!job_data.driver_license) {
      return "Non exigé"
    }
    return "exigé"
  }
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="logo entreprise"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{job_data.offer_title}</p>
          <p className="text-small text-default-500">{job_data.employer_name}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <div className="mb-3">
          <Chip color="primary" size="md"><b>{job_data.contract_type}</b> basé à <b>{job_data.job_location}</b></Chip>
        </div>
        <ul>
            <li>Education : <b>{getJobEducationPreferences()}</b></li>
            <li>Permis de conduire : <b>{getJobDriverLicenseRequirements()}</b></li>
        </ul>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          En savoir plus
        </Link>
      </CardFooter>
    </Card>
  );
}