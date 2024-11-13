import { useState } from "react";
import LocationsTitle from "../components/LocationsTitle";
import CardPlaces from "./CardPlaces"; // Assuming this import exists

const LocationsPage = ({ locations }) => {
  const [filterDistrict,setFilterDistrict] = useState(false)

  return (
    <section className="mt-20">
      {locations.map((district, i) => (
        <div key={i} className={`${filterDistrict ? '' : ' flex flex-wrap justify-center'}`}>
          {filterDistrict ? <LocationsTitle locTitle={district.name} /> : <></>}
          <div className={`${filterDistrict ? 'flex space-x-4 overflow-x-auto py-4 snap-x' : ''}`}>
          {district.district_locations.length > 0 ? (
            district.district_locations.map((location, j) => (
              <div className={`${filterDistrict ? 'flex-none snap-center' : ' '}`}>
              <CardPlaces
                key={j}
                image={location.image}
                title={location.title}
                content={location.content}
                stars={location.stars}
              />
            </div>
            ))
          ) : (
            filterDistrict ? <p>No locations found for this district.</p> : <></>
          )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default LocationsPage;
