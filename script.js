// Get form and table body
const form = document.getElementById("extinguisherForm");
const listBody = document.getElementById("listBody");

// Listen for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.getElementById("extId").value;
  const location = document.getElementById("location").value;
  const type = document.getElementById("type").value;
  const lastRefill = document.getElementById("lastRefill").value;
  const lastTest = document.getElementById("lastTest").value;

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
    <td>${lastRefill}</td>
    <td>${nextRefill}</td>
    <td>${lastTest}</td>
    <td>${nextTest}</td>
  `;
  listBody.appendChild(row);

  // Reset form
  form.reset();
});
