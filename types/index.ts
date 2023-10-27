import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

interface JobData {
  'offer_title': string;
  'employer_name': string;
  'job_location': string;
  'contract_type': string;
  'start_date': string;
  'experience_required': string;
  'education_level': string;
  'diplome': string;
  'description': string;
  'contact_email': string;
  'contact_telephone': string;
  'driver_license': string;
  'competences': Array<String>;
  'activites': Array<String>;
}

export type JobCard = {
  job_data: JobData;
};
