import React from "react";
const date = new Date();
const actuallyYear = date.getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright DragozSoft {actuallyYear} </p>
    </footer>
  );
}

export default Footer;
