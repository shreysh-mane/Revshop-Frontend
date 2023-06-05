export class User{


   constructor(
      public id:string,
      public firstname:string,
      public lastname:string,
      public password:string,
      public email:string,
      public profile:string,
      public status:string,
      public userrole:string

  ){
      
      this.id=id||"",
      this.firstname=firstname||"",
      this.lastname=lastname||"",
      this.password=password||"",
      this.email=email||"",
      this.profile=profile||"",
      this.status=status||"",
      this.userrole=userrole||"user"

  }

}