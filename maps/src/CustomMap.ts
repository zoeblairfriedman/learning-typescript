// this is importing both the value and the the type
import { User } from "./User"


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


  //bad version
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    })
  }

  addCompanyMarker(company: Company): void {

  }

}