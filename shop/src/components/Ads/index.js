import React from "react";
import Container from "@mui/material/Container";
import {Box, Typography} from "@mui/material";

import './style.scss'

function Ads({ list, columns, title = "", hasAnimation = false }) {
  const hasTitle = Boolean(title)

  return (
    <div className={`ads ${hasAnimation ? 'has-animation' : null}`}>
      {hasTitle ? (
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center ',
            justifyContent: 'center'
          }}
        >
          <Box mt={3} width={'10%'} borderBottom={'2px solid #e0b0e9'}/>

          <Typography sx={{ py: 2 }} variant={'h5'}>{title}</Typography>

          <Box mb={3} width={'10%'} borderBottom={'1px solid #e0b0e9'}/>
        </Container>
      ) : null}

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

export default Ads;
