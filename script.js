/* Hide all sections by default */
.section {
  display: none;
  padding: 2rem;
}

/* Show only the active section */
.section.active {
  display: block;
}

/* Navbar styling */
.navbar {
  background: #f5f5f5;
  padding: 1rem;
  text-align: center;
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  gap: 1.5rem;
}

.navbar a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.navbar a.active {
  color: #007bff;
  font-weight: bold;
}

/* Hero section */
.hero {
  text-align: center;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 1rem auto;
  border: 3px solid #ddd;
}

.about-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem auto;
  max-width: 600px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* Card containers */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Certifications grid */
.cert-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.cert {
  flex: 1 1 200px;
  text-align: center;
}
