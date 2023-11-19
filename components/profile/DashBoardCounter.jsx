import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

const DashBoardCounter = ({ pendingCount, acceptedCount, visitiors }) => {
  return (
    <div className="statistics-section pt-20">
      <div className="statistic ">
        <h1 className="heading1V3">
          <p className="paragraphV3 label">Pending Invitation</p>
          <CountUp
            start={1}
            end={pendingCount}
            duration={5}
            redraw={true}
          ></CountUp>
        </h1>
      </div>
      <div className="statistic">
        <Link href="/accepted" style={{ color: "black" }}>
          <h1 className="heading1V3">
            <p className="paragraphV3 label">Connection</p>
            <CountUp
              start={1}
              end={acceptedCount}
              duration={5}
              redraw={true}
            ></CountUp>
          </h1>
        </Link>
      </div>
      <div className="statistic">
        <p className="paragraphV3 label">Visitors</p>
        <Link href="/sent" style={{ color: "black" }}>
          <h1 className="heading1V3">
            <CountUp
              start={1}
              end={visitiors}
              duration={5}
              // suffix="+"
              redraw={true}
            ></CountUp>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default DashBoardCounter;
