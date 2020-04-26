export enum TaskGroupType {
    ImmediateImportant = "Immediate And Important" , 
    ImmediateNotImportant ="Immediate But Not Important" ,
    NotImmediateImportant ="Not Immediate But Important" ,
    NotImmediateNotImportant =" Neither Immediate Nor Important" 
}

export enum TaskStatus { 
    New = "New",
    InProgress = "In Progress",
    Completed = "Completed"
}

export class TodoTask{ 
    public taskId : number ; 

    public taskName : string;

    public taskGroup : TaskGroupType;

    public taskStatus : TaskStatus ; 

    public registerDate : Date; 

    public dueDate : Date; 

    public newStatus : TaskStatus;

}