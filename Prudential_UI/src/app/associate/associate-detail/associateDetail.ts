import { AssociateInfo } from '../associate-info/associate-info';
class Skill {
  'skillName': string;
  'skillRating': string;
}

export class AssociateDetail {
  'associateSkill': Skill[];
  'engagementName': String;
  'majorFunction': String;
  'band': String;
  'emailIbm': String;
  'emailClient': String;
  'xid': String;
  'clientManager': String;
  'endDate': Date;
  'location': String;
  'city': String;
  'billType': String;
  'billCode': String;
  'role': String;
  'asOnDate': Date;
  'clientExpDate': Date;
  'itExpDate': Date;
  'ibmDate': Date;
  'experienceWithPru': number;
  'careerExperience': number;
  'experienceWithIbm': number;
  'resourceCriticality': String;
  'atImmigrationVisaRisks': String;
  'backupSuccessorResource': number;
  'keyContingencyGroup': String;
  'additionalContingency': String;
  'visaType': String;
  'workPermitValidUntil': String;
  'extensionUpdates': Date;
  'visaMaxOutDate': Date;
  'timeLeftInUs': String;
  'visaNominations': String;
  'riskMitigationComments': String;
  'planInCaseOfExtensionAmendmentRejection': String;
  'skillset': String;
  constructor(
    engagementName: String,
    majorFunction: String,
    band: String,
    emailIbm: String,
    emailClient: String,
    xid: String,
    clientManager: String,
    endDate: Date,
    location: String,
    city: String,
    billType: String,
    billCode: String,
    role: String,
    asOnDate: Date,
    clientExpDate: Date,
    itExpDate: Date,
    ibmDate: Date,
    experienceWithPru: number,
    careerExperience: number,
    experienceWithIbm: number,
    resourceCriticality: string,
    atImmigrationVisaRisks: String,
    backupSuccessorResource: number,
    keyContingencyGroup: String,
    additionalContingency: String,
    visaType: String,
    workPermitValidUntil: String,
    extensionUpdates: Date,
    visaMaxOutDate: Date,
    timeLeftInUs: String,
    visaNominations: String,
    riskMitigationComments: String,
    planInCaseOfExtensionAmendmentRejection: String,
    skillset: String
  ) {
    this.engagementName = engagementName;
    this.majorFunction = majorFunction;
    this.band = band;
    this.emailIbm = emailIbm;
    this.emailClient = emailClient;
    this.xid = xid;
    this.clientManager = clientManager;
    this.endDate = endDate;
    this.location = location;
    this.city = city;
    this.billType = billType;
    this.billCode = billCode;
    this.role = role;
    this.asOnDate = asOnDate;
    this.clientExpDate = clientExpDate;
    this.itExpDate = itExpDate;
    this.ibmDate = ibmDate;
    this.experienceWithPru = experienceWithPru;
    this.careerExperience = careerExperience;
    this.experienceWithIbm = experienceWithIbm;
    this.resourceCriticality = resourceCriticality;
    this.atImmigrationVisaRisks = atImmigrationVisaRisks;
    this.backupSuccessorResource = backupSuccessorResource;
    this.keyContingencyGroup = keyContingencyGroup;
    this.additionalContingency = additionalContingency;
    this.visaType = visaType;
    this.workPermitValidUntil = workPermitValidUntil;
    this.extensionUpdates = extensionUpdates;
    this.visaMaxOutDate = visaMaxOutDate;
    this.timeLeftInUs = timeLeftInUs;
    this.visaNominations = visaNominations;
    this.riskMitigationComments = riskMitigationComments;
    this.planInCaseOfExtensionAmendmentRejection =
      planInCaseOfExtensionAmendmentRejection;
    this.skillset = skillset;
  }
}
