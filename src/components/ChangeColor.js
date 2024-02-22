import { useState } from "react";
import { changeColor } from "../features/theme";
import { useDispatch } from "react-redux";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input onChange={(e) => setColor(e.target.value)} type="text" />
      <button onClick={() => dispatch(changeColor(color))}>Change Bg</button>
    </div>
  );
}

export default ChangeColor;
