import React from "react";
// import Markdown from "react-markdown";
// import MDEditor from "@uiw/react-md-editor";
import parse from "html-react-parser";
function DisplayFormattedContent({ markdown }) {
  // console.log("markdown", markdown);
  return (
    <div className="ProseMirror">{parse(markdown)}</div>
    // <div>
    //   <Markdown>{markdown}</Markdown>
    //   {/* <MDEditor.Markdown source={markdown} /> */}
    // </div>
  );
}

export default DisplayFormattedContent;
