const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
      this.username = newName;
  },

  updatePlayTime(hours) {
      this.playTime += hours;
  },

  getInfo() {
      return `${this.username}'ın ${this.playTime} aktif saati var!`;
  }
};

// Test Cases
console.log(profile.getInfo()); // "Jacob'ın 300 aktif saati var!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco'nun 300 aktif saati var!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco'nun 320 aktif saati var!"
