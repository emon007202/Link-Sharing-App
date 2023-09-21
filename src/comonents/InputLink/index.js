import React, { useState ,useContext} from "react";
import { linkContext } from "../../Context/linkContext";
import "./index.css";

const InputLink = ({ linkTypeId, url, handleOnChangeLinkType, linkId, id }) => {
  const { linkTypes, editLink, removeLink } = useContext(linkContext);
  const [inputUrl, setInputUrl] = useState(url);

  const checkUrlPattern = (inputUrl) => {
    var parser = document.createElement("a");
    parser.href = inputUrl;
    console.log(parser.protocol)
    if (!parser.protocol === "http" || parser.protocol === "https") {
      return "The link is not valid";
    } else if (
      linkTypeId &&
      parser.hostname !== "www." +
        linkTypes.find((linkType) => linkType.id === linkTypeId).name.toLowerCase() +
          ".com"
    ) {
      return "The link is not valid with the selected link type";
    }
    return "";
  };

  const handleOnChangeUrl = (newUrl) => {
    setInputUrl(newUrl);
    if (!checkUrlPattern(newUrl)) editLink(id, newUrl, linkTypeId);
  };

  console.log(checkUrlPattern(inputUrl))

  return (
    <div className="addlink1">
      <h4>
        Link #{linkId}{" "}
        <span
          onClick={removeLink}
          style={{ opacity: ".7", marginLeft: "480px", fontWeight: "100" }}
        >
          Remove
        </span>
      </h4>
      <div className="input1">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Platform</label>
          <select
            value={linkTypeId}
            onChange={(e) => editLink(id, inputUrl, e.target.value)}
          >
            <option key={""} value={""}>
              Please Select Link Type
            </option>
            {linkTypes.map((linkType) => (
              <option key={linkType.id} value={linkType.id}>
                {linkType.name}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Link</label>
          <input
            type="url"
            placeholder={linkTypes.find((linkType) => linkType.id === linkTypeId)?.placeholder}
            value={inputUrl}
            onChange={(e) => handleOnChangeUrl(e.target.value)}
            style={{ borderColor: checkUrlPattern(inputUrl) ? "red" : "initial" }} 
          />
          {checkUrlPattern(inputUrl) && (
            <p style={{ color: "red" }}>{checkUrlPattern(inputUrl)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputLink;
