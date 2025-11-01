import React from 'react';
import '../assets/styles/Contact.scss';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function Contact() {
  const EMAIL = 'yashwanth.0568@gmail.com';
  const PHONE_DISPLAY = '+49-1777046819';
  const PHONE_TEL = '+491777046819';
  const CALENDLY_30 = 'https://calendly.com/yashwanth-0568/30min';

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: 'left', maxWidth: 600 }}
          >
            Reach me via Email / Phone / Schedule a 30-min Teams call.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              startIcon={<CalendarMonthIcon />}
              href={CALENDLY_30}
              target="_blank"
              rel="noreferrer"
              sx={{ textTransform: 'none', minWidth: 160 }}
            >
              Schedule a Meeting
            </Button>

            <Button
              variant="outlined"
              startIcon={<EmailOutlinedIcon />}
              href={`mailto:${EMAIL}`}
              sx={{ textTransform: 'none', minWidth: 120 }}
            >
              Email
            </Button>

            <Button
              variant="outlined"
              startIcon={<PhoneIphoneIcon />}
              href={`tel:${PHONE_TEL}`}
              sx={{ textTransform: 'none', minWidth: 100 }}
            >
              Call
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Contact;
