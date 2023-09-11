import React from "react";

const WhyChoose = () => {
  return (
    <div className="whychoose_main">
      <div className="container py-25">
        <h2 className="text-center">Why choose us</h2>
        <h3 className="text-center">
          There is lot of matrimony website worldwide and also lot of services
          in Bangladesh or USA. Now the topic of discussion is why you should
          take our service in the crowd of so many services.
        </h3>

        <div className="choose_content">
          <div className="choose_list_item">
            <p>
              We provide you the choice of making the image private. If you set
              it to private, only those with your permission will be able to
              view that picture.
            </p>
            <p>
              We have the option to make your profile private. If you are
              looking for more secure profile you can make it private.
            </p>
            <p>
              Any candidate's Private and Public Profiles are accessible by a
              matchmaker, who is free to share them with anybody for matchmaking
              reasons.
            </p>
            <p>
              Both parties can view each other's private profiles after
              receiving permission to do so. The ability to send emails to one
              another via MailBox is currently available to both sides. The
              system never distributes contact details.
            </p>
          </div>
          <div className="circle_main">
            <div className="circle1">
              <div className="circle2">
                <div className="circle3">
                  <img src="/landing/privacy.png" alt="privacy" />
                  <h3>Privacy</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="choose_content2">
          <div className="choose_list_item">
            <p>
             Most trusted matrimonial site service based on Bangladesh & USA
            </p>
            <p>
              Your privacy is one of our major concern. Your photo, location, contact can remain private
            </p>
            <p>
           All the profiles go thru our phone verification process
            </p>
            <p>
          We have a large database of potential groom and bride all over the world
            </p>
          </div>
          <div className="circle_main2">
            <div className="circle1">
              <div className="circle2">
                <div className="circle3">
                  <img src="/landing/trust.png" alt="privacy" />
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
