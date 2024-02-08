class Data {
  userData = [
    {
      id: 1,
      name: 'Parthi',
      mobile: '1234567890',
      email: 'test@test.com',
      username: 'parthi',
      password: 'parthi',
    },
  ];

  getUser = (username, password) => {
    return this.userData.find(obj => {
      return obj.username == username && obj.password == password;
    });
  };

  addUser = obj => {
    obj.id = this.userData.length + 1;
    this.userData.push(obj);
  };

  checkUsername = username => {
    const index = this.userData.findIndex(obj => {
      return obj.username == username;
    });

    return index != -1 ? true : false;
  };
}

export default new Data();
