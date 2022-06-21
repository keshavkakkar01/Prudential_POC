export class AssociateInfo {
  public employeeId: string;
  public associateName: string;
  public email: string;
  public contact: string;
  public projectId: string;
  constructor(
    employeeId: string,
    associateName: string,
    email: string,
    contact: string,
    projectId: string
  ) {
    this.employeeId = employeeId;
    this.associateName = associateName;
    this.email = email;
    this.contact = contact;
    this.projectId = projectId;
  }
}
