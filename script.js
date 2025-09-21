/* Navbar styling */
.navbar {
  background: #f5f5f5; /* light gray / white */
  padding: 1rem;
  text-align: center;
  position: sticky; /* optional: keeps navbar on top */
  top: 0;
  z-index: 100;
}

/* Body / sections below navbar */
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #000; /* black background */
  color: #fff; /* optional: make text readable on black */
}

/* All sections inside body */
.section {
  display: none; /* hide by default */
  padding: 2rem;
  background-color: transparent; /* keep the black from body */
}

/* Show active section */
.section.active {
  display: block;
}
