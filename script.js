// Get form and table body
const form = document.getElementById("extinguisherForm");
const listBody = document.getElementById("listBody");

// Listen for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.getElementById("extId").value;
  const location = document.getElementById("location").value;
  const type = document.getElementById("type").value;
  const brand = document.getElementById("brand").value;
  const capacity = document.getElementById("capacity").value;
  const weight = document.getElementById("weight").value;
  const pressure = document.getElementById("pressure").value;
  const lastRefill = document.getElementById("lastRefill").value;
  const lastTest = document.getElementById("lastTest").value;
  const condition = document.getElementById("condition").value;
  const responsible = document.getElementById("responsible").value;
  const notes = document.getElementById("notes").value;

  // Calculate next refill and next test (1 year later)
  function addYear(dateStr) {
    const date = new Date(dateStr);
    date.setFullYear(date.getFullYear() + 1);
    return date.toISOString().split("T")[0];
  }

  const nextRefill = addYear(lastRefill);
  const nextTest = addYear(lastTest);

  // Create table row
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${id}</td>
    <td>${location}</td>
    <td>${type}</td>
    <td>${brand}</td>
    <td>${capacity}</td>
    <td>${weight}</td>
    <td>${pressure}</td>
    <td>${lastRefill}</td>
    <td>${nextRefill}</td>
    <td>${lastTest}</td>
    <td>${nextTest}</td>
    <td>${condition}</td>
    <td>${responsible}</td>
    <td>${notes}</td>
  `;
  listBody.appendChild(row);

  // Reset form
  form.reset();
});
