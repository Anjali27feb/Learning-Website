
  // Logout function
  function logout() {
    localStorage.removeItem("loggedIn");
    alert("You have been logged out.");
    window.location.href = "index.html";
  }
    // Theme toggle
    const toggleBtn = document.getElementById("themeToggle");
    const body = document.body;

    toggleBtn.addEventListener("click", () => {
      const darkMode = body.getAttribute("data-theme") === "dark";
      body.setAttribute("data-theme", darkMode ? "light" : "dark");
      toggleBtn.textContent = darkMode ? "🌙 Dark Mode" : "☀️ Light Mode";
      localStorage.setItem("theme", darkMode ? "light" : "dark");
    });

    // Load theme
    if (localStorage.getItem("theme") === "dark") {
      body.setAttribute("data-theme", "dark");
      toggleBtn.textContent = "☀️ Light Mode";
    }

    // Expand/collapse sections
    document.querySelectorAll("section h2").forEach((header) => {
      header.addEventListener("click", () => {
        const section = header.parentElement;
        section.classList.toggle("active");
        const arrow = header.querySelector("span");
        arrow.textContent = section.classList.contains("active") ? "▲" : "▼";
      });
    });

    // Search filter
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      document.querySelectorAll("section").forEach((section) => {
        const text = section.innerText.toLowerCase();
        section.classList.toggle("hidden", !text.includes(query));
      });
    });
