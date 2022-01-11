$(function () {
  //Ajax osztály példányosítása
  const myAjax = new MyAjax();
  //tömb 
  const postok = [];
  //apivégpont
  let fajlnev = "http://localhost:3000/posts"; //_expand=users";
  
  myAjax.adatotBeolvas(fajlnev, postok, PostMegjelenit);

  //törlés
  $(window).on("torol", (event) => {
    console.log(event.detail.id);
    myAjax.adatotTorol(fajlnev, event.detail.id);
    //myAjax.adatotBeolvas(fajlnev, postok, PostMegjelenit);
  });

  //adatok megjelenítése
  function PostMegjelenit(postok) {
    const szuloElem = $(".postok");
    const sablonElem = $(".post");
    szuloElem.empty();
    sablonElem.show();
    postok.forEach(function (elem) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const ujPost = new Task(ujElem, elem);
    });
    sablonElem.hide();
  }
  // Új adat felvétele

  $("#ujpost").on("click", () => {
    let ujAdat = {
      title: $("#cim").val(),
      description: $("#leiras").val(),
      date: $("#datum").val(),
      userId: $("#szerzo").val(),
    };
    myAjax.adatotKuld(fajlnev, ujAdat);
  });

  //keresés

  $("#kereses").on("keyup", () => {
    let kereses1 = "http://localhost:3000/posts";
    kereses += "?description_like=" + $("#kereses").val();
    myAjax.adatotBeolvas(kereses, postok, PostMegjelenit);
  });

  //módosítás
  $(window).on("modosit", (event) => {
    let id = event.detail.id;
    $("#postID").val(id);
    $("#cim").val(event.detail.title);
    $("#leiras").val(event.detail.description);
    $("#datum").val(event.detail.date);
    $("#szerzo").val(event.detail.userId);
  });

  //módosítás gomb
  $("#posztModosit").on("click", () => {
    let id = $("#postID").val();
    let ujAdat = {
      id: $("#postID").val(),
      title: $("#cim").val(),
      description: $("#leiras").val(),
      date: $("#datum").val(),
      userId: $("#szerzo").val(),
    };
    myAjax.adatotModosit(fajlnev, ujAdat, id);
  });
});
