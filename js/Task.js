class Task {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;

    this.title = this.elem.children(".title");

    this.description = this.elem.children(".description");
    this.date = this.elem.children(".date");
    this.user = this.elem.children(".userId");
    this.lajk = this.elem.children(".lajk");
    this.torol = this.elem.children(".torles");
    this.modosit = this.elem.children(".modositas");

    //töröl gomb
    this.torol.on("click", () => {
      this.torolTrigger();
    });

    //módosít gomb
    this.modosit.on("click", () => {
      this.modositTrigger();
    });

    this.setAdatok(adat);

    //console.log(elem);
  }
  //ertekek beállítása
  setAdatok(ertekek) {
    this.title.html(ertekek.title);
    this.description.html(ertekek.description);
    this.date.html(ertekek.date);
    //this.user.html(ertekek.users.name);
    this.lajk.html(ertekek.lajk);
  }

  //eseménykezelők
  modositTrigger() {
    let esemeny = new CustomEvent("modosit", { detail: this.adat });

    window.dispatchEvent(esemeny);
  }

  torolTrigger() {
    let esemeny = new CustomEvent("torol", { detail: this.adat });

    window.dispatchEvent(esemeny);
  }
}
