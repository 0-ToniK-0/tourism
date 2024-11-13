import { useState } from "react";
import LocationsTitle from "../components/LocationsTitle";
import CardPlaces from "./CardPlaces"; 
import ToggleSwitch from "../components/ToggleSwitch";
import { motion } from 'framer-motion';

const LocationsPage = ({ locations }) => {
  const [filterDistrict, setFilterDistrict] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = () => {
    setFilterDistrict(prevState => !prevState);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filterLocations = (districts) => {
    return districts.flatMap(district =>
      district.district_locations.filter(location =>
        location.title.toLowerCase().includes(searchQuery)
      )
    );
  };

  return (
    <section className="mt-20">
      <div className="text-center m-10 lebanon-text" style={{ fontSize: '60px' }}>Browse Lebanon's Most Beautiful Places</div>
      <div className="mb-4 flex  justify-center">
        <input 
          type="text"
          placeholder="🔍 Search locations"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border rounded px-3 py-2 mr-4 w-full md:w-1/3"
        />
        <span className="mx-2 my-auto">Filter By Districts:</span>
        
        <span className="mx-2 my-auto"><ToggleSwitch handleToggle={handleToggle} filterDistrict={filterDistrict} /></span>

      </div>

      {filterDistrict ? (
        locations.map((district, i) => {
          const filteredLocations = district.district_locations.filter(location =>
            location.title.toLowerCase().includes(searchQuery)
          );

          return (
            <div key={i}>
              {!searchQuery ? <LocationsTitle locTitle={district.name} /> : filteredLocations.length > 0 && <LocationsTitle locTitle={district.name} />}
              <div className="flex space-x-4 overflow-x-auto py-4 snap-x">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((location, j) => (
                    <motion.div key={j}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-none snap-center">
                      <CardPlaces
                        image={location.image}
                        title={location.title}
                        content={location.content}
                        stars={location.stars}
                      />
                    </motion.div>
                  ))
                ) : (
                  !searchQuery && <p>No locations found for this district.</p>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-wrap justify-center">
          {filterLocations(locations).map((location, index) => (
            <motion.div key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="flex-none">
              
              <CardPlaces
                image={location.image}
                title={location.title}
                content={location.content}
                stars={location.stars}
              />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LocationsPage;
