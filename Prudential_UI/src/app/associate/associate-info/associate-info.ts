export class AssociateInfo{
    public employeeId  : string;
    public name :string;
    public email: string;
    public contact: string;
    public projectId: string;
    constructor(employeeId  : string, name :string, email: string, contact: string, projectId: string){
        this.employeeId = employeeId;
        this.name = name;
        this.email= email;
        this.contact = contact;
        this.projectId=projectId;
    }    
}