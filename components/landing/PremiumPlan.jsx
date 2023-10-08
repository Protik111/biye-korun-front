import React from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { Button } from "@mantine/core";

let _mocDataFree_card = [
  {
    id: 1,
    title: "Search Profile",
  },
  {
    id: 2,
    title: "Shortlist & Send Interest",
  },
  {
    id: 3,
    title: "Photo Album",
  },
  {
    id: 4,
    title: "Chat & Messaging",
  },
  {
    id: 5,
    title: "View Contact",
  },
  {
    id: 6,
    title: "Customer Support",
  },
  {
    id: 7,
    title: "Boost Profile",
  },
];
const PremiumPlan = () => {
  return (
    <div className="premiumPlan_main">
      <div className="container py-25">
        <h1 className="text-center">Plans</h1>
        {/* <h3 className="text-center">
          The search of any profiles is primarily free. a search upgrade for a
          personalized one. With a premium membership, you may communicate
          easily with your prospect and receive more responses. Many people have
          found their love. Awaiting your soul mate are you ready?
        </h3> */}
        <br />
        <div className="plan_card">
          <div className="free_card">
            <h1>FREE</h1>
            {_mocDataFree_card.map((item) => {
              return (
                <div className="div_list" key={item.id}>
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M9.02863 3.31433L5.14292 7.20005L3.54292 5.60005L2.74292 6.40005L5.14292 8.80005L9.82863 4.11433L9.02863 3.31433Z"
                        fill="#CCFF90"
                      />
                    </svg>
                  </div>

                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
          <div className="paid_card">
            <h1>Paid</h1>
            {_mocDataFree_card.map((item) => {
              return (
                <div className="div_list" key={item.id}>
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M9.02863 3.31433L5.14292 7.20005L3.54292 5.60005L2.74292 6.40005L5.14292 8.80005L9.82863 4.11433L9.02863 3.31433Z"
                        fill="#CCFF90"
                      />
                    </svg>
                  </div>

                  <p>{item.title}</p>
                </div>
              );
            })}
            <Button
              onClick={() => window.open("/plans")}
              sx={{
                backgroundColor: "#FD123F",
                color: "white",
                width: "200px",
                position: "absolute",
                left: "15%",
                bottom: "10%",
              }}
              color="pink"
              variant="white"
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;
