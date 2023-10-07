import { Avatar } from "@mantine/core";

const HowWorks = () => {
  return (
    <div className="howWorks py-25">
      <h1 className="text-center">How Biye Korun Works</h1> 
      <h3 className="text-center py-10">
      A Simple Guide to Finding Your Life Partner
      </h3>

      <div className="howWorks__wrapper container grid grid-cols-3 grid-cols-3-responsive place-center">
        <div className="p-30">
          <Avatar size="lg" color="#713ABE" radius="xl">
            01
          </Avatar>
          <h3>Create Account</h3>
          <p className="mt-5">
            Create a detailed profile, upload images, and specify your perfect
            partner
          </p>
        </div>

        <div className="p-30">
          <Avatar size="lg" color="black" radius="xl">
            02
          </Avatar>
          <h3>Find Partner</h3>
          <p className="mt-5">
            Search find out perfect match for you. Select and connect with
            matches you like
          </p>
        </div>

        <div className="p-30">
          <Avatar size="lg" color="black" radius="xl">
            03
          </Avatar>
          <h3>Start Communication</h3>
          <p className="mt-5">
            Become a premium member & Start communicating with potential partner
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
