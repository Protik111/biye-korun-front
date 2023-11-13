import AOS from "aos";

const useAnimation = (duration) => {
  const makeAnimation = () => {
    AOS.init({
      offset: 200,
      duration: duration ? duration : 1000,
      easing: "ease-in-sine",
      delay: 800,
      // disable: 'mobile',
      once: false,
    });
  };

  return {
    makeAnimation,
  };
};

export default useAnimation;
