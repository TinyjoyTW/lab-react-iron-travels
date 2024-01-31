import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList() {
  const [travelData, setTravelData] = useState(travelPlansData);

  return (
    <>
      {travelData.map((travel) => {
        return (
          <div key={travel.id}>
            <img style={{width: "500px"}} src={travel.image} />
            <h2>{travel.destination}</h2>
            <p>{travel.description}</p>
            <p>
              <b>Price: {travel.totalCost} €</b>
            </p>
          </div>
        );
      })}
    </>
  );
}