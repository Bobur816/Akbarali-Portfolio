import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  return (
    <CopyToClipboard text="akbaralixasanov2000@gmail.com" onCopy={() => setCopied(true)}>
      <button className="copy-button">
        <BiCopy />
        {copied ? "Copied" : "Copy email"}
      </button>
    </CopyToClipboard>
  );
}

export default CopyEmailButton;
