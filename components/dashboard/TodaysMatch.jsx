import { Anchor } from "@mantine/core";
import BasicProfile from "./BasicProfile";
import DetailedProfile from "./DetailedProfile";

const TodaysMatch = () => {
  return (
    <div className="todaysMatch container">
      <h2 className="text-center mb-15">
        Here are Today's top Matches for you. Connect with them now!
      </h2>

      <div className="todaysMatch__wrapper">
        <div className="todaysMatch__wrapper--requestBox">
          <div className="requestBox-container">
            <div className="requestPhoto">
              <img src="/dashboard/female-user-image.svg" alt="Request Photo" />
            </div>
            <div className="text-center">
              <Anchor href="/" target="_blank">
                Request a photo
              </Anchor>
            </div>
          </div>
        </div>

        <div className="todaysMatch__wrapper--contentBox">
          <BasicProfile></BasicProfile>
          <DetailedProfile></DetailedProfile>
        </div>
      </div>
    </div>
  );
};

export default TodaysMatch;
