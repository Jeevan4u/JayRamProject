import React from "react";
const Event = ({ daysData }) => {
  return (
    <div className="events py-5">
      <div className="event-header">
        <div className="row backgrd-table p-5">
          <div className="col-4">
            <h3 className="fw-bold">Time</h3>
          </div>
          <div className="col-4">
            <h3 className="fw-bold">Content</h3>
          </div>
          <div className="col-4">
            <h3 className="fw-bold">Speaker</h3>
          </div>
        </div>
        {daysData.map((items, index) => {
          return (
            <>
              <div className="container-fix">
                <div className="row align-items-center">
                  <div className="col-4">
                    <p className="time-text py-3">{items.time}</p>
                  </div>
                  <div className="col-4">
                    <p className="content-text py-3">{items.title}</p>
                  </div>
                  <div className="col-4">
                    <div className="row">
                      <div className="col-6 text-center fw-bold py-4">
                        {items.author}
                      </div>
                      <div className="col-6">
                        <div className="img-cont py-3">
                          <img src={items.photo} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Event;
