

  // it allows our classes to opt in. rather than saying our methodd has to accomodate all of these objects, the objects have to chose to fulfill or satisfy the interface by having the correct properties with the correct names and correct types 

  // instructions to ever class on how they can be an argument to addMarker:

  export interface Mappable {
    location: {
      lat: number;
      lng: number;
    },
    markerContent(): string;
    color: string;
  }




export class CustomMap {
  //anotate its type. that is the type of the variable. it's an instance of the class
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }


  addMarker(mappable: Mappable): void {

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })
      infoWindow.open(this.googleMap, marker)
    })
  }



    // it allows our classes to opt in. rather than saying our methodd has to accomodate all of these objects, the objects have to chose to fulfill or satisfy the interface by having the correct properties with the correct names and correct types 

}