import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
    const [color, setColor] = useState("crimson");
    const styles = {
        backgroundColor: color,
    };
    const INITIAL_COLOR_LIST = ["pink", "red", "blue"];
    const [colorList, setColorList] = useState([INITIAL_COLOR_LIST]);                                                                                                                                   
    return (
        <div>
            <input value={color}
                onChange={(event) => setColor(event.target.value)}
                style={styles}
                placeholder="Enter the color" />



            <button onClick={() => (setColorList([...colorList, color]))}>AddColor</button>

            {colorList.map((color, index) => (
                <ColorBox key={index} color={color} />
            ))}
            <ColorBox />
            <ColorBox />
            <ColorBox />

        </div>
    );
}
