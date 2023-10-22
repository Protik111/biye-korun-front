// "use client"

import React from "react";

const WhyChoose = () => {
  return (
    <div className="whychoose_main">
      <div className="container py-25">
        <h2 className="text-center">Why Choose Us</h2>
        {/* <h3 className="text-center">
          There is lot of matrimony website worldwide and also lot of services
          in Bangladesh & USA. Now the topic of discussion is why you should
          take our service in the crowd of so many services.
        </h3> */}

        <div className="choose_content">
          <div className="choose_list_item">
            <p>
              We provide you the choice of making the image private. If you set
              it to private, only those with your permission will be able to
              view that picture
            </p>
            <p>
              We have the option to make your profile private. If you are
              looking for more secure profile you can make it private
            </p>
            <p>
              Any candidate's Private and Public Profiles are accessible by
              matchmakers, who are free to share them with anybody for matchmaking
              purposes
            </p>
            <p>
              Both parties can view each other's private profiles after
              receiving permission to do so. The ability to send emails to one
              another via MailBox is available to both sides. The
              system never discloses contact details
            </p>
          </div>
          <div className="circle_main">
            <div className="circle1">
              <div className="circle2">
                <div className="circle3">
                  <img src="/landing/privacy-2.svg" alt="privacy" />
                  <h3>Privacy</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="choose_content2">
          <div className="choose_list_item">
            <p>
              Most trusted matrimonial site service based in Bangladesh & USA
            </p>
            <p>
              Your privacy is one of our major concerns. Your photos, location, and contact information can remain private
            </p>
            <p>
              All profiles go through our phone & email verification process
            </p>
            <p>
              We have a vast database of potential grooms and brides from all over the world
            </p>
          </div>
          <div className="circle_main2">
            <div className="circle1">
              <div className="circle2">
                <div className="circle3">
                  <img src="/landing/trust2.svg" alt="privacy" />
                  <h3>Trust</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
