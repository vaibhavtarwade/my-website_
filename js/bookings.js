/**
 * MOTOX - User Hub & Bookings Manager (bookings.html)
 * Manages Test Ride Bookings, Wishlist, and Recently Explored Motorcycles.
 */

function renderBookingsPage() {
  renderBookingsList();
  renderWishlistSection();
  renderHistorySection();
}

function renderBookingsList() {
  const container = document.getElementById("bookingsListContainer");
  const countBadge = document.getElementById("bookingsCountBadge");
  if (!container) return;

  const bookings = getBookings();
  if (countBadge) countBadge.textContent = `${bookings.length} Request${bookings.length === 1 ? '' : 's'}`;

  if (bookings.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h3 class="empty-state-title">No test rides scheduled</h3>
        <p class="empty-state-text">Explore our motorcycle catalog and book a free dealer demo ride at your preferred time.</p>
        <a href="bikes.html" class="btn btn-primary">Discover Motorcycles</a>
      </div>
    `;
    return;
  }

  container.innerHTML = bookings.map((b, idx) => `
    <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 1rem;" class="fade-in">
      <div style="display: flex; align-items: center; gap: 1.25rem;">
        <img src="${b.bikeImage}" alt="${b.bikeName}" style="width: 90px; height: 60px; object-fit: contain;" onerror="handleImgError(this)">
        <div>
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent-primary); font-weight: 700;">Booking ID: ${b.id}</div>
          <h4 style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin: 0.1rem 0;">${b.bikeName}</h4>
          <div style="font-size: 0.85rem; color: var(--text-secondary);">
            📍 ${b.city} | 🗓️ ${b.date} at ${b.time}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">Rider: ${b.name} (${b.phone})</div>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <span class="badge badge-success" style="padding: 0.4rem 0.8rem;">${b.status}</span>
        <button class="btn btn-outline btn-sm" onclick="cancelBooking('${b.id}')">Cancel</button>
      </div>
    </div>
  `).join("");
}

function cancelBooking(bookingId) {
  let bookings = getBookings().filter(b => b.id !== bookingId);
  saveBookings(bookings);
  renderBookingsList();
  showToast("Test ride request cancelled", "info");
}

function renderWishlistSection() {
  const container = document.getElementById("wishlistGridContainer");
  const countBadge = document.getElementById("wishlistCountBadge");
  if (!container) return;

  const wishlist = getWishlist();
  if (countBadge) countBadge.textContent = `${wishlist.length} Saved`;

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state-icon">♡</div>
        <h3 class="empty-state-title">Your wishlist is empty</h3>
        <p class="empty-state-text">Save motorcycles while browsing to track specifications, prices, and easily compare them later.</p>
        <a href="bikes.html" class="btn btn-primary">Browse Bikes</a>
      </div>
    `;
    return;
  }

  const bikes = wishlist.map(id => getBikeById(id)).filter(Boolean);
  container.innerHTML = bikes.map(b => createBikeCardHTML(b)).join("");
}

function renderHistorySection() {
  const container = document.getElementById("historyGridContainer");
  if (!container) return;

  const recentIds = getRecentlyViewed();
  const bikes = recentIds.map(id => getBikeById(id)).filter(Boolean);

  if (bikes.length === 0) {
    container.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--text-muted); grid-column: 1 / -1;">
        No recently viewed motorcycles yet.
      </div>
    `;
    return;
  }

  container.innerHTML = bikes.map(b => createBikeCardHTML(b)).join("");
}

window.renderWishlistPage = renderWishlistSection;
window.renderBookingsPage = renderBookingsPage;

document.addEventListener("DOMContentLoaded", () => {
  renderBookingsPage();
});
