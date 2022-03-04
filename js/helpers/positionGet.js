export default function Position() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
          var lat = pos.coords.latitude,
            lon = pos.coords.longitude;
          resolve( { lat, lon } );
        },
        (err) => {
          if (err.code == err.PERMISSION_DENIED)
            reject("PERMISSION DENIED");
        });
      } else {
        reject("Geolocation not aviliable");
      }
    });
  }