import React, { useState } from "react";
import datas from "../data";
import "./event.css";
import Event from "../../components/Event";
import Image1 from "../Header/images/artist.jpeg";
import { act } from "react-dom/test-utils";
const Events = () => {
  const [data, setData] = useState(datas);
  const day1Data = [
    {
      time: "11:00 AM to 12:00 PM",
      title: "Vestibulum vel eros vel metus lacinia feugiat a nec metus. ",
      author: "Yui Ronald",
      photo: Image1,
      id: 1,
    },
    {
      time: "1:00 AM to 5:00 PM",
      title:
        "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex. ",
      author: "Jeevan",
      photo: Image1,
      id: 2,
    },
    {
      time: "5:00 AM to 1:00 PM",
      title:
        " Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna.l metus lacinia feugiat a nec metus. ",
      author: "Sanjay",
      photo: Image1,
      id: 3,
    },
  ];
  const day2Data = [
    {
      time: "5:00 AM to 7:00 PM",
      title: "Jeevan Karki vel eros vel metus lacinia feugiat a nec metus. ",
      author: "Abi Ronald",
      photo: Image1,
      id: 1,
    },
    {
      time: "3:00 AM to 8:00 PM",
      title:
        "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus.. ",
      author: "bijen",
      photo: Image1,
      id: 2,
    },
    {
      time: "5:00 AM to 1:00 PM",
      title:
        " Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna.l metus lacinia feugiat a nec metus. ",
      author: "Sanjay",
      photo: Image1,
      id: 3,
    },
  ];
  const day3Data = [
    {
      time: "2:00 AM to 9:00 PM",
      title: "Vestibulum vel eros vel metus lacinia feugiat a nec metus. ",
      author: "Yui Ronald",
      photo: Image1,
      id: 1,
    },
    {
      time: "1:00 AM to 5:00 PM",
      title:
        "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar.  ",
      author: "abinash",
      photo: Image1,
      id: 2,
    },
    {
      time: "5:00 AM to 1:00 PM",
      title:
        " Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna.l metus lacinia feugiat a nec metus. ",
      author: "Sanjay",
      photo: Image1,
      id: 3,
    },
  ];
  const [activeID, setActiveID] = useState(0);
  const days = [
    { days: "Day 1", date: "16 August", id: 1 },
    { days: "Day 2", date: "17 August", id: 2 },
    { days: "Day 3", date: "18 August", id: 3 },
  ];
  return (
    <div className="container-fluid backgrd">
      <div className="event-scheduel-wrapper">
        <div className="event-day d-flex flex-column pt-5">
          <div className="event-scheduel">
            <h1 className="fw-bold py-5">Event Scheduel</h1>
          </div>
          <div className="days">
            <div className="row">
              {days.map((item, index) => (
                <div
                  className={`col-4 d-flex flex-column ${
                    activeID === index && "active"
                  } dayslist`}
                  onClick={() => setActiveID(index)}
                >
                  <h3>{item.days}</h3>
                  <p>{item.date}</p>
                </div>
              ))}
            </div>
            {activeID === 1 ? (
              <Event daysData={day1Data} />
            ) : activeID === 2 ? (
              <Event daysData={day2Data} />
            ) : (
              <Event daysData={day3Data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
