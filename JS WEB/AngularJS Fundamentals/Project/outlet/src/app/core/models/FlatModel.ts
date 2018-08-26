export class FlatModel {
    constructor(
      public town : string,
      public _id : string,
      public address : string,
      public description : string,
      public category : string,
      public price : number,
      public size : number,
      public imageUrl : number,
      public users : Array<Object>,
      public period? : string,
      public brick? : string,
      public elevator? : string,

      

    ) { }
}