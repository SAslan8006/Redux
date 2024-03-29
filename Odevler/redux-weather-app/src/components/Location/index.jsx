import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "@/reducers/weatherReducer";

const Location = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(
            fetchWeather({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            })
          );
        },
        (error) => console.log({ error })
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather({ q: location }));
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between">
      <input
        type="text"
        placeholder="Enter a city name"
        onChange={handleChange}
        className="flex-1"
      />

      <button type="submit">🔍</button>
    </form>
  );
};

export default Location;
