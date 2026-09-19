/**
 * MOTOX - Interactive Bike Finder Wizard (finder.html)
 * Multi-criteria algorithmic matching based on rider budget, riding purpose, preferred style & skill level.
 */

document.addEventListener("DOMContentLoaded", () => {
  const wizardSteps = document.querySelectorAll(".wizard-step");
  const progressFill = document.getElementById("finderProgressFill");
  const resultsCard = document.getElementById("finderResultsCard");
  const resultsGrid = document.getElementById("finderResultsGrid");
  const restartBtn = document.getElementById("restartFinderBtn");

  let currentStep = 1;
  const userAnswers = {
    budget: null,
    purpose: null,
    style: null,
    experience: null
  };

  function updateStepUI() {
    wizardSteps.forEach((step, idx) => {
      const stepNum = idx + 1;
      step.classList.toggle("active", stepNum === currentStep);
    });

    if (progressFill) {
      progressFill.style.width = `${((currentStep - 1) / 4) * 100}%`;
    }
  }

  // Bind option buttons for each step
  document.querySelectorAll(".wizard-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const stepParent = btn.closest(".wizard-step");
      const stepKey = stepParent.dataset.stepKey;
      const value = btn.dataset.value;

      stepParent.querySelectorAll(".wizard-opt-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      userAnswers[stepKey] = value;

      // Auto advance to next step or calculate results
      if (currentStep < 4) {
        currentStep++;
        updateStepUI();
      } else {
        calculateAndShowMatches();
      }
    });
  });

  // Step Back Buttons
  document.querySelectorAll(".wizard-back-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        updateStepUI();
      }
    });
  });

  function calculateAndShowMatches() {
    if (progressFill) progressFill.style.width = "100%";
    wizardSteps.forEach(s => s.classList.remove("active"));
    if (resultsCard) resultsCard.style.display = "block";

    // Scoring Algorithm
    const scoredBikes = MOTOX_DATA.bikes.map(bike => {
      let score = 0;
      let reasons = [];

      // Budget match
      const price = bike.price;
      if (userAnswers.budget === "under-1l" && price <= 100000) {
        score += 30;
        reasons.push("Fits within your budget under ₹1 Lakh");
      } else if (userAnswers.budget === "1-2l" && price >= 100000 && price <= 200000) {
        score += 30;
        reasons.push("Perfect fit for ₹1-2 Lakh budget range");
      } else if (userAnswers.budget === "2-5l" && price > 200000 && price <= 500000) {
        score += 30;
        reasons.push("Optimal mid-tier pricing between ₹2-5 Lakh");
      } else if (userAnswers.budget === "5l-plus" && price > 500000) {
        score += 30;
        reasons.push("Premium flagship matching ₹5 Lakh+ segment");
      } else {
        score += 10;
      }

      // Purpose match
      if (userAnswers.purpose === "city" && (bike.category === "naked" || bike.category === "electric" || bike.category === "retro")) {
        score += 25;
        reasons.push("Nimble steering geometry ideal for city traffic");
      } else if (userAnswers.purpose === "commute" && (bike.mileageValue >= 35 || bike.category === "electric")) {
        score += 25;
        reasons.push("Exceptional fuel economy for everyday commuting");
      } else if (userAnswers.purpose === "performance" && (bike.powerValue >= 35 || bike.category === "sports")) {
        score += 25;
        reasons.push("Thrilling power-to-weight ratio & track acceleration");
      } else if (userAnswers.purpose === "touring" && (bike.fuelCapacity.includes("13") || bike.fuelCapacity.includes("15") || bike.fuelCapacity.includes("17") || bike.fuelCapacity.includes("30"))) {
        score += 25;
        reasons.push("Plush endurance seating & long-range tank");
      } else if (userAnswers.purpose === "adventure" && bike.category === "adventure") {
        score += 25;
        reasons.push("Long-travel suspension & high ground clearance for rough terrain");
      }

      // Style match
      if (bike.category === userAnswers.style) {
        score += 25;
        reasons.push(`Matches your preferred ${bike.categoryName} styling`);
      }

      // Experience match
      if (userAnswers.experience === "beginner" && bike.powerValue <= 25) {
        score += 20;
        reasons.push("Forgiving throttle delivery suitable for newer riders");
      } else if (userAnswers.experience === "intermediate" && bike.powerValue >= 20 && bike.powerValue <= 50) {
        score += 20;
        reasons.push("Engaging mid-capacity performance to hone cornering skills");
      } else if (userAnswers.experience === "experienced" && bike.powerValue >= 40) {
        score += 20;
        reasons.push("Advanced electronic rider aids & explosive top-end power");
      }

      return { bike, score, reasons };
    });

    scoredBikes.sort((a, b) => b.score - a.score);
    const topMatches = scoredBikes.slice(0, 4);

    if (resultsGrid) {
      resultsGrid.innerHTML = topMatches.map(m => `
        <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="badge badge-accent">${m.bike.categoryName}</span>
            <span class="badge badge-success" style="font-size: 0.8rem; font-weight: 800;">${m.score}% Preference Match</span>
          </div>

          <div style="height: 160px; display: flex; align-items: center; justify-content: center;">
            <img src="${m.bike.gallery.hero}" alt="${m.bike.brand} ${m.bike.model}" style="max-height: 100%; object-fit: contain;" onerror="handleImgError(this)">
          </div>

          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">${m.bike.brand}</div>
            <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--text-primary); margin: 0.2rem 0;">${m.bike.model}</h3>
            <div style="font-family: var(--font-heading); font-weight: 800; font-size: 1.4rem; color: var(--accent-primary);">${m.bike.priceDisplay}</div>
          </div>

          <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.2); padding: 0.75rem; border-radius: var(--radius-sm);">
            <strong>Why it matches your profile:</strong>
            <ul style="padding-left: 1.2rem; margin-top: 0.3rem;">
              ${m.reasons.map(r => `<li>${r}</li>`).join("")}
            </ul>
          </div>

          <div style="display: flex; gap: 0.5rem; margin-top: auto;">
            <a href="bike-details.html?id=${m.bike.id}" class="btn btn-secondary btn-sm" style="flex: 1;">Explore Bike</a>
            <button class="btn btn-primary btn-sm" onclick="openTestRideModal('${m.bike.id}')">Test Ride</button>
          </div>
        </div>
      `).join("");
    }

    resultsCard.scrollIntoView({ behavior: "smooth" });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      currentStep = 1;
      userAnswers.budget = null;
      userAnswers.purpose = null;
      userAnswers.style = null;
      userAnswers.experience = null;

      document.querySelectorAll(".wizard-opt-btn").forEach(b => b.classList.remove("active"));
      if (resultsCard) resultsCard.style.display = "none";
      updateStepUI();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  updateStepUI();
});
