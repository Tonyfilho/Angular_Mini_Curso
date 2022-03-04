export class UserAddClass {
  id?: number;
  name!: string;
  phone!: string;
  email!: string;
  username!: string;
  website!: string;
  address!: { street: string; suite: string; city: string; zipcode: string };
  company!: { name: string; catchPhrase: string; bs: string };
  
  

  // constructor(userAddClass: UserAddClass) {
  //   this.id = userAddClass.id;
  //   this.name = userAddClass.name;
  //   this.phone = userAddClass.phone;
  //   this.email = userAddClass.email;
  //   this.username = userAddClass.username;
  //   this.website = userAddClass.website;
  //   this.address.city = userAddClass.address.city;
  //   this.address.street = userAddClass.address.street;
  //   this.address.suite = userAddClass.address.suite;
  //   this.address.zipcode = userAddClass.address.zipcode;
  //   this.company.bs = userAddClass.company.bs;
  //   this.company.catchPhrase = userAddClass.company.catchPhrase;
  //   this.company.name = userAddClass.company.name;
  // }
}
