import React from "react";
import Container from "@mui/material/Container";

import './style.scss'

function Slider({ list, columns }) {
  return (
    <div className="ads">
      <Container maxWidth="lg">
        <div className="inner">
          {list.length === 1
            ? list.map(img => (
              <img src={img.src} alt={img.alt} />
            ))
            : (
              <div className="multiple-ads">
                {list.map(img => (
                  <div className="img" style={{ flex: `0 0 ${100 / columns}%` }}>
                    <img src={img.src} alt={img.alt} />
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </Container>
    </div>
  )
}

export default Slider;
