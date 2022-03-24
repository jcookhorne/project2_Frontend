export interface Reimbursement{
    reimbursementId: number;
	employeeId: number;
    reimbursementAmount: number;
	reimbursementReason:String;
	reimbursementDate:String;
	state: String, // pending and Resolved
	status:String; // Approved and Denied
}