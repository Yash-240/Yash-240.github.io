import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Yash-240" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/g-yashwanth/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Koblenz, Rheinland-Pfalz, Germany</p>
    </footer>
  );
}

export default Footer;