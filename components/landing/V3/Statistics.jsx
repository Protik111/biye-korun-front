import CountUp from 'react-countup';
import React from "react";

const Statistics = () => {
  return (
    <div className="clients_bg">
      <div className=" statistics-section container">
        <div className="statistic ">
          {/* <h1 className="heading1V3">1,00K</h1> */}
          <h1 className="heading1V3">
            <CountUp
              start={1}
              end={100}
              duration={5}
              suffix='K'
              redraw={true}
            >
            </CountUp>
          </h1>
          <p className="paragraphV3">Bride & Grooms</p>
        </div>
        <div className="statistic">
          {/* <h1 className="heading1V3">10+</h1> */}
          <h1 className="heading1V3">
            <CountUp
              start={1}
              end={10}
              duration={5}
              suffix='+'
              redraw={true}
            >
            </CountUp>
          </h1>
          <p className="paragraphV3">Years of Experience</p>
        </div>
        <div className="statistic">
          {/* <h1 className="heading1V3">500+</h1>
           */}
          <h1 className="heading1V3">
            <CountUp
              start={1}
              end={500}
              duration={5}
              suffix='+'
              redraw={true}
            >
            </CountUp>
          </h1>
          <p className="paragraphV3">Event Completed</p>
        </div>
        <div className="statistic">
          {/* <h1 className="heading1V3">1.2k</h1> */}
          <h1 className="heading1V3">
            <CountUp
              start={1}
              end={1.2}
              decimal={4}
              duration={5}
              suffix='K'
              redraw={true}
            >
            </CountUp>
          </h1>
          <p className="paragraphV3">Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
