import React from "react";
import dataCSS from "../../data/dataCSS.js";


export default function TechnoList({ styles, arrData }) {
  return (
    <div className={styles.warp_item_technologies_list}>
      {arrData.map((t, i) => (
        <div
          key={i}
          style={{
            background: dataCSS[i],
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {t}
        </div>
      ))}
    </div>
  );
}
