class MyAjax {
    constructor() {}
    
    adatotBeolvas(faljnev, tomb, myCallback) {
      tomb.splice(0, tomb.length);
      $.ajax({
        url: faljnev,
        type: "GET",
        success: function (result) {
          result.forEach((value) => {
            tomb.push(value);
          });
          myCallback(tomb);
        },
      });
    }
  
    adatotKuld(faljnev, adat) {
      $.ajax({
        url: faljnev,
        type: "POST",
        data: adat,
        success: function (result) {
         
        },
      });
    }
  
    adatotTorol(faljnev, id) {
      $.ajax({
        url: faljnev + "/" + id,
        type: "DELETE",
        success: function (result) {
       
        },
      });
    }
  
    adatotModosit(faljnev, adat, id) {
      $.ajax({
        url: faljnev + "/" + id,
        type: "PUT",
        data: adat,
        success: function (result) {
         
        },
      });
    }
  }
  