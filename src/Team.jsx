import React, { useEffect, useState } from "react";
import "./App.css";
// import "../images";
import nishant from "./nishant_shukla.png";
import amit from "./amit_kr_baheti.png";
import akshay from "./akshay_akash.png";
import sparsh from "./sparsh_agarwal.png";
import GridItem from "./gridItem";
import GridItemI from "./gridItem1";
import { firebaseDB as db } from "./lib/firebase";
import {
  ref,
  set,
  getDatabase,
  get,
  child,
  update,
  onValue,
} from "firebase/database";

function Team(params) {
  const [eventsList, setEvalList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    onValue(
      ref(db, `evalteam/`),
      (snapshot) => {
        if (snapshot.exists()) {
          let events = Object.entries(snapshot.val());
          console.log(Object.entries(snapshot.val()));
          events = events.map((event) => {
            return { id: event[0], ...event[1] };
          });
          setEvalList(events);
          console.log(eventsList);
        } else {
          console.log("No data available");
          setEvalList([]);
        }
        // setIsloading(false);
      },
      (error) => console.log(error)
    );
  }, [isLoading]);
 

  return (
    <>
      {/* <hr style={{margin:"0% 20%"}}></hr> */}
      <div>
        <h2
          style={{
            // textDecoration: "none!important",
            textDecoration: "underline",
            margin: "2% 0",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
          id="team"
        >
          
          Meet the Team
        </h2>

        <div className="grid-container">
          <h2
            style={{
              textDecoration: "underline",
              textDecorationThickness: "2px",
            }}
          >
            Core Team
          </h2>
          <div className="sub-grid-container">
            <GridItemI
              name="Nishant Shukla"
              knowMoreLink="https://www.linkedin.com/in/nishantshukla57/"
              poster={nishant}
            />
            <GridItemI
              name="Amit Kr. Baheti"
              knowMoreLink="https://www.linkedin.com/in/amitkumarbaheti/"
              poster={amit}
            />
            <GridItemI
              name="Akshay Akash"
              knowMoreLink="https://www.linkedin.com/in/akshay-akash/"
              poster={akshay}
            />
            <GridItemI
              name="Sparsh Agarwal"
              knowMoreLink="https://www.linkedin.com/in/sparsh-agrawal17/"
              poster={sparsh}
            />
          </div>
          <h2
            style={{
              textDecoration: "underline",
              textDecorationThickness: "2px",
              margin: "2% 0",
            }}
          >
            Evaluation Team
          </h2>
          <div className="sub-grid-container">
            {/* <GridItem name="Aditya Talwar"/>
          <GridItem name="Evaluation Report"/>
          <GridItem name="Demo/Pitch Day"/>
          <GridItem name="Fundraise Listing"/>

          <GridItem name="Manish Jindal" />
          <GridItem name="Dirghayu Kaushik"/>
          <GridItem name="Nijhil Pal Singh"/>
          <GridItem name="Somnath Bhadury"/>

          <GridItem name="Udayan Banerjee"/> */}
            {eventsList.map((event, _id) => (
              <GridItem key={event.id} {...event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
