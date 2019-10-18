export default class User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };

  constructor(json: any) {
    this.gender = json.gender;
    this.name = {
      title: json.name.title,
      first: json.name.first,
      last: json.name.last,
    };
  }
}

// {"gender":"female","name":{"title":"Mrs","first":"Christina","last":"Hale"}
