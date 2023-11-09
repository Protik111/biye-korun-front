import Link from "next/link";

const GiftCollection = () => {
  return (
    <div className="gift__collection container">
      <div className="gift__collection--left gift_item-1">
        {/* <img src="/V3/landing/Gift-card.png" alt="Gift Collection" loading="lazy" /> */}
        <div className="flex flex-gap-20 images">
          <img
            className="small"
            src="/V3/landing/card/card1.png"
            alt="Honeymoon"
            loading="lazy"
          />
          <img
            className="large"
            src="/V3/landing/card/card2.png"
            alt="Honeymoon"
            loading="lazy"
          />
        </div>
        <div className="flex flex-gap-20 mt-20 images">
          <img
            className="large"
            src="/V3/landing/card/card3.png"
            alt="Honeymoon"
            loading="lazy"
          />
          <img
            className="small"
            src="/V3/landing/card/card4.png"
            alt="Honeymoon"
            loading="lazy"
          />
        </div>
      </div>
      <div className="gift__collection--right rounded-15 gift_item-2">
        <h2 className="heading2V3">Gift Collection</h2>
        <p className="mt-25 paragraphV3">
          BiyeKorun is a ONE-STOP solution from meeting your loved one to
          completing your honeymoon and enjoying your life. Expressing gratitude
          to your guests, friends, and family is a lovely way to acknowledge
          their support and presence during this important journey in your life.
          BiyeKorun allows you to collect gifts and organize them from your
          BiyeKorun App.
        </p>
        <Link href="/login">
          <button className="primary-btn-v3 mt-25">Learn More &rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default GiftCollection;
