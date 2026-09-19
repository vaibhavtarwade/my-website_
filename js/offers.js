/**
 * MOTOX - Marketing Offers & Live Countdown Timers (offers.html)
 * Real-time dynamic countdown timers, voucher copy functionality, and dealer inquiries.
 */

document.addEventListener("DOMContentLoaded", () => {
  const offersGrid = document.getElementById("offersListGrid");
  if (!offersGrid) return;

  // Render Offers Cards
  offersGrid.innerHTML = MOTOX_DATA.offers.map((offer, idx) => `
    <div class="offer-card fade-in">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="badge badge-accent">${offer.category}</span>
        <span class="badge" style="background: rgba(255,255,255,0.08); font-weight: 700;">${offer.badge}</span>
      </div>

      <div>
        <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.4rem;">${offer.title}</h3>
        <div style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 900; color: var(--accent-primary); margin-bottom: 0.5rem;">${offer.discount}</div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${offer.description}</p>
      </div>

      <div style="font-size: 0.8rem; color: var(--text-muted);">
        <strong>Applicable Motorcycles:</strong> ${offer.applicableBikes.join(", ")}
      </div>

      <!-- Real Countdown Timer Component -->
      <div class="countdown-timer-box" data-expiry="${offer.expiryDate}" id="countdown-${offer.id}">
        <div class="timer-segment">
          <span class="timer-num days">00</span>
          <span class="timer-lbl">Days</span>
        </div>
        <div style="font-size: 1.5rem; color: var(--accent-primary); font-weight: 800;">:</div>
        <div class="timer-segment">
          <span class="timer-num hours">00</span>
          <span class="timer-lbl">Hours</span>
        </div>
        <div style="font-size: 1.5rem; color: var(--accent-primary); font-weight: 800;">:</div>
        <div class="timer-segment">
          <span class="timer-num mins">00</span>
          <span class="timer-lbl">Mins</span>
        </div>
        <div style="font-size: 1.5rem; color: var(--accent-primary); font-weight: 800;">:</div>
        <div class="timer-segment">
          <span class="timer-num secs">00</span>
          <span class="timer-lbl">Secs</span>
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: auto;">
        <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="copyPromoCode('${offer.code}')">
          📋 Copy Code: <strong style="color: var(--accent-primary);">${offer.code}</strong>
        </button>
        <button class="btn btn-primary btn-sm" onclick="openTestRideModal()">
          Avail Offer
        </button>
      </div>

      <div style="font-size: 0.72rem; color: var(--text-muted); font-style: italic;">
        * ${offer.terms}
      </div>
    </div>
  `).join("");

  // Start Real-Time Countdown Intervals
  startCountdownTimers();

  function startCountdownTimers() {
    function updateTimers() {
      document.querySelectorAll(".countdown-timer-box").forEach(box => {
        const expiryStr = box.dataset.expiry;
        const targetDate = new Date(expiryStr).getTime();
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) {
          box.innerHTML = `<div style="color: var(--accent-primary); font-weight: 700; font-size: 0.9rem;">Offer Expired</div>`;
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        const daysEl = box.querySelector(".days");
        const hoursEl = box.querySelector(".hours");
        const minsEl = box.querySelector(".mins");
        const secsEl = box.querySelector(".secs");

        if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
        if (minsEl) minsEl.textContent = String(mins).padStart(2, "0");
        if (secsEl) secsEl.textContent = String(secs).padStart(2, "0");
      });
    }

    updateTimers();
    setInterval(updateTimers, 1000);
  }
});

function copyPromoCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Copied code "${code}" to clipboard!`, "success");
  }).catch(() => {
    showToast(`Code: ${code}`, "info");
  });
}
