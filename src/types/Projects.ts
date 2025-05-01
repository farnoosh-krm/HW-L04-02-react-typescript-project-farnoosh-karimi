export type Project={
    id:number;
    title:string;
    description:string;
    startDate:string;
    endDate:string;
    status:"not started" | "in progress" | "completed";
}