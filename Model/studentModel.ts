import { ObjectId } from "mongodb";

export class bookModel {
  public _id: ObjectId;
  public name: string;    
  public school: string;
  public  level: string;
  public performances: any;
  public promoted: boolean | undefined;

  constructor(
    _id: ObjectId,
    name: string,   
    school: string,
     level: string,
     performances: any,
   promoted: boolean,
   
  ) {
    this._id=new ObjectId();
    this.name= name;   
    this.school=school;
    this.level=level;
    this.performances= performances;
    this.promoted=promoted;
    
  }
}
