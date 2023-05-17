import React, { useEffect, useState } from "react";
import "./App.css";
// import "../images";
import nishant from "./nishant_shukla.png";
import amit from "./amit_kr_baheti.png";
import parth from "./Parth.png";
import ashwat from "./Ashwat.png";
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
  const [eventsInvList, setInvList] = useState([]);
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
          // console.log(eventsList);
        } else {
          console.log("No data available");
          setEvalList([]);
        }
        // setIsloading(false);
      },
      (error) => console.log(error)
    );
  }, [isLoading]);
  useEffect(() => {
    onValue(
      ref(db, `invteam/`),
      
      (snapshot) => {
        if (snapshot.exists()) {
          let events = Object.entries(snapshot.val());
          console.log(Object.entries(snapshot.val()));
          events = events.map((event) => {
            return { id: event[0], ...event[1] };
          });
          setInvList(events);
          // console.log(eventsInvList);
        } else {
          console.log("No data available");
          setInvList([]);
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
            textDecoration: "none!important",
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
              name="Parth Gupta"
              knowMoreLink="https://www.linkedin.com/in/parthgupta03/"
              poster={parth}
            />
            <GridItemI
              name="Ashwat Kr Singh"
              knowMoreLink="https://www.linkedin.com/in/ashwat-singh/"
              poster={ashwat}
            />
            <GridItemI
              name="Tanaya Mujumdar"
              knowMoreLink="https://www.linkedin.com/in/tanaya-mujumdar-80aa17207"
              poster='https://www.ecelliitbhu.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fteam%2F2022-2023%2FTanaya.7a503c78fb088b376de3e2ef6124ea39.jpg&w=1920&q=75'
            />
          </div>
          <h2
            style={{
              textDecoration: "underline",
              textDecorationThickness: "2px",
              margin: "2% 0",
            }}
          >
            Advisory Board
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
          <h2
            style={{
              textDecoration: "underline",
              textDecorationThickness: "2px",
              margin: "2% 0",
            }}
          >
            Investor Pool
            
          </h2>
          {/* <Griditem name = "chetan">
            */}
            <div className="sub-grid-container">
            {eventsInvList.map((event, _id) => (
              <GridItem key={event.id} {...event} />
            ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default Team;
