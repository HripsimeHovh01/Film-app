"use strict";

// this = contex = {}

const app = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  status: null,
  private: false,
  init() {
    this.count = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");
    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");
    }
  },
  rememberAndCreateUserFilms() {
    for (let i = 0; i < 2; i++) {
      const filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
      const filmRate = +prompt(`Ինչքա՞ն եք գնահատում ${filmName} ֆիլմը`);

      if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
        this.movies[filmName] = filmRate;
        console.log("Resolve");
      } else {
        console.log("Reject");
        i--;
      }
    }
  },
  userFavoriteGenres() {
    for (let i = 0; i < 2; i++) {
      this.genres.push(prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`));
    }
  },
  detectUserPersonalLevel() {
    if (this.count < 10) {
      this.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
    } else if (this.count >= 10 && this.count < 30) {
      this.status = "Դուք դասական ֆիլմ դիտող եք";
    } else if (this.count >= 30) {
      this.status = "Դուք կինոման եք !";
    } else {
      console.log("Տեղի է ունեցել ինչ-որ խնդիր");
    }
  },
  checkDBPrivatStatus(state) {
    state ? console.log("Sorry but DB is not visible") : console.log(this);
  },
  startApp() {
    this.init();
    this.rememberAndCreateUserFilms();
    this.userFavoriteGenres();
    this.detectUserPersonalLevel();
    this.checkDBPrivatStatus(this.private);
  }
};

app.startApp();