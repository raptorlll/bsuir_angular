import { Role } from "./role.model";
import { Time, ConsultantGroupUser } from "../api/generated";

export class ConsultantInformation { 
    availableFrom?: string;
    availableUntil?: string;
    consultantGroupUser?: ConsultantGroupUser;
    degree?: string;
    education?: string;
    id?: number;
    licenseFile?: string;
    licenseNumber?: string;
    licenseUntil?: string;
}