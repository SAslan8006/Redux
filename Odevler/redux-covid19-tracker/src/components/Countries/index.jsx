import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegionData, selectCounrty } from "@/reducers/regionReducer";
import { fetchCovidData } from "@/reducers/covidReducer";
import Error from "@/components/Error";

const Countries = () => {
  const dispatch = useDispatch();
  const { data, status, error, selectedCountry } = useSelector(
    (state) => state.region
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRegionData());
      dispatch(fetchCovidData({ selectedCountry }));
    } else {
      dispatch(fetchCovidData({ selectedCountry }));
    }
  }, [selectedCountry]);

  const handleSelect = (e) => {
    dispatch(selectCounrty(e.target.value));
  };

  if (status === "failed") {
    return <Error error={error} />;
  }

  return (
    <select
      className="py-2 w-64 border-b-2 border-b-slate-500"
      value={selectedCountry}
      onChange={handleSelect}
      disabled={status === "loading"}
    >
      <option value="" disabled hidden>
        Select a country
      </option>
      {data.map((item, index) => (
        <option value={item?.iso} key={index}>
          {item?.name}
        </option>
      ))}
    </select>
  );
};

export default Countries;
