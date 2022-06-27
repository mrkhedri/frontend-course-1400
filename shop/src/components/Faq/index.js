import React, { useState } from "react";
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import './style.scss'
import {Box} from "@mui/material";

const list = [
  {
    id: 1,
    panel: 'panel1',
    title: 'آیا برای خرید لازم است از قبل در وبسایت ثبت‌نام کرده باشم؟',
    description: 'خیر، شما با انتخاب و اضافه کردن محصولات به سبد خریدتان می‌توانید اطلاعات فردی و ارسالتان را کامل کنید و پرداخت را انجام دهید.',
  },
  {
    id: 2,
    panel: 'panel2',
    title: 'چطور هزینه سفارش را پرداخت کنم؟',
    description: 'تمامی کاربران می‌توانند از طریق درگاه بانکی با تمام کارت‌های عضو شتاب هزینه سفارش را به صورت اینترنتی پرداخت نمایند.',
  }
]

function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log('expanded -> ', expanded)

  return (
    <div className="faq">
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

        <Typography sx={{py: 2}} variant={'h5'}>سوالات پرتکرار</Typography>

        <Box mb={3} width={'10%'} borderBottom={'1px solid #e0b0e9'}/>
      </Container>

      <Container maxWidth="lg" className="content">
        {list.map(item => (
          <Accordion key={item.id} expanded={expanded === item.panel} onChange={handleChange(item.panel)}>
            <AccordionSummary
              expandIcon={
                expanded === item.panel
                  ? <RemoveIcon fontSize="small" />
                  : <AddIcon fontSize="small" />
              }
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  )
}

export default Faq;
