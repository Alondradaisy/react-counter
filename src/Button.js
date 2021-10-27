import React from "react";

function BigButton() {
  const [clickCount, setClickCount] = useState("0");
  const { onClick, label } = props;

  return <button style={{ background: "red", padding: "15px" }}></button>;
}

export default BigButton;
