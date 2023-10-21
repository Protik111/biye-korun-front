import React from "react";

function DisplayFormattedContent({ formattedContent }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: formattedContent,
      }}
    />
  );
}

export default DisplayFormattedContent;
