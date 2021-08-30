//instrcutions to every other classes
//on how they can be anargument to 'addMarker'
interface Mappable{
  location:{
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

//we can also use class as a type like interface 
export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(
      document.getElementById(divId),
      { 
        zoom:1,
        center: {
          lat: 0,
          lng: 0
        }
      }
    );
  }

  addMarker(mappable: Mappable): void{
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })



    marker.addListener('click',()=>{
      const infoWindow  = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap,marker);
    })
    
  }
}