/**
 * MOTOX - Core Application Logic
 * Manages State, LocalStorage, Navbar, Search Modal, Theme Switcher,
 * Wishlist, Comparison Tray, Toasts, and Global Event Handlers.
 */

// LocalStorage Keys
const STORAGE_KEYS = {
  THEME: "motox_theme",
  WISHLIST: "motox_wishlist",
  COMPARE: "motox_compare",
  BOOKINGS: "motox_bookings",
  RECENT: "motox_recent_viewed"
};

// State Helpers
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
  updateBadges();
}

function getCompareList() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPARE)) || [];
  } catch (e) {
    return [];
  }
}

function saveCompareList(list) {
  localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(list));
  updateBadges();
}

function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS)) || [];
  } catch (e) {
    return [];
  }
}

function saveBookings(list) {
  localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(list));
}

function getRecentlyViewed() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENT)) || [];
  } catch (e) {
    return [];
  }
}

function addRecentlyViewed(bikeId) {
  let list = getRecentlyViewed().filter(id => id !== bikeId);
  list.unshift(bikeId);
  if (list.length > 6) list = list.slice(0, 6);
  localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(list));
}

// Wishlist Toggle
function toggleWishlist(bikeId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  let list = getWishlist();
  const index = list.indexOf(bikeId);
  const bike = getBikeById(bikeId);
  const name = bike ? `${bike.brand} ${bike.model}` : "Motorcycle";

  if (index > -1) {
    list.splice(index, 1);
    saveWishlist(list);
    showToast(`Removed ${name} from Wishlist`, "info");
  } else {
    list.push(bikeId);
    saveWishlist(list);
    showToast(`Added ${name} to Wishlist!`, "success");
  }

  // Update UI hearts across the page
  document.querySelectorAll(`[data-wishlist-id="${bikeId}"]`).forEach(btn => {
    btn.classList.toggle("active", list.includes(bikeId));
    btn.innerHTML = list.includes(bikeId) ? '♥' : '♡';
  });

  // If on bookings page wishlist section, re-render
  if (window.renderWishlistPage) window.renderWishlistPage();
}

// Compare Toggle
function toggleCompare(bikeId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  let list = getCompareList();
  const index = list.indexOf(bikeId);
  const bike = getBikeById(bikeId);
  const name = bike ? `${bike.brand} ${bike.model}` : "Motorcycle";

  if (index > -1) {
    list.splice(index, 1);
    saveCompareList(list);
    showToast(`Removed ${name} from Compare`, "info");
  } else {
    if (list.length >= 3) {
      showToast("Comparison limit reached (Max 3 motorcycles)", "warning");
      return;
    }
    list.push(bikeId);
    saveCompareList(list);
    showToast(`Added ${name} to Comparison!`, "success");
  }

  // Update UI compare buttons
  document.querySelectorAll(`[data-compare-id="${bikeId}"]`).forEach(btn => {
    btn.classList.toggle("active", list.includes(bikeId));
  });

  if (window.renderComparePage) window.renderComparePage();
}

// Update Badges on Navbar
function updateBadges() {
  const wishCount = getWishlist().length;
  const compCount = getCompareList().length;

  document.querySelectorAll(".wishlist-count").forEach(el => {
    el.textContent = wishCount;
    el.style.display = wishCount > 0 ? "flex" : "none";
  });

  document.querySelectorAll(".compare-count").forEach(el => {
    el.textContent = compCount;
    el.style.display = compCount > 0 ? "flex" : "none";
  });
}

// Toast Notifications
function showToast(message, type = "info") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div style="font-size: 1.1rem; color: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#ff3b30'};">
      ${type === 'success' ? '✓' : type === 'warning' ? '⚠' : 'ℹ'}
    </div>
    <div style="flex: 1; font-size: 0.9rem; font-weight: 500;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// Theme Switcher
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeToggles = document.querySelectorAll(".theme-toggle-btn");
  themeToggles.forEach(btn => {
    btn.innerHTML = savedTheme === "dark" 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(STORAGE_KEYS.THEME, next);
      initTheme();
      showToast(`Switched to ${next} theme`, "info");
    });
  });
}

// Search Modal Overlay
function initSearch() {
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const openButtons = document.querySelectorAll(".open-search-btn");
  const closeBtn = document.getElementById("closeSearchBtn");

  if (!searchModal) return;

  function openSearch() {
    searchModal.classList.add("active");
    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
      renderSearchResults("");
    }
  }

  function closeSearch() {
    searchModal.classList.remove("active");
  }

  openButtons.forEach(btn => btn.addEventListener("click", openSearch));
  if (closeBtn) closeBtn.addEventListener("click", closeSearch);

  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) closeSearch();
  });

  // Shortcut key '/'
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && searchModal.classList.contains("active")) {
      closeSearch();
    }
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value.trim());
    });
  }

  function renderSearchResults(query) {
    if (!searchResults) return;
    const q = query.toLowerCase();
    
    if (!q) {
      searchResults.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          Type brand, model, or capacity (e.g., <em>Yamaha</em>, <em>400</em>, <em>Sports</em>, <em>Duke</em>)
        </div>
      `;
      return;
    }

    const matches = MOTOX_DATA.bikes.filter(bike => 
      bike.brand.toLowerCase().includes(q) ||
      bike.model.toLowerCase().includes(q) ||
      bike.categoryName.toLowerCase().includes(q) ||
      bike.engine.toLowerCase().includes(q) ||
      bike.displacement.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <strong>No motorcycles found matching "${query}"</strong>
          <p style="font-size: 0.85rem; margin-top: 0.3rem;">Try searching for Yamaha, KTM, Ninja, 400, Adventure, or Retro.</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = matches.map(b => `
      <a href="bike-details.html?id=${b.id}" class="search-item">
        <img src="${b.gallery.hero}" alt="${b.brand} ${b.model}" onerror="handleImgError(this)">
        <div style="flex: 1;">
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent-primary); font-weight: 700;">${b.brand} • ${b.categoryName}</div>
          <div style="font-weight: 800; font-size: 1rem; color: var(--text-primary);">${b.model}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${b.engine} | ${b.power} | ${b.topSpeed}</div>
        </div>
        <div style="font-family: var(--font-heading); font-weight: 800; color: var(--accent-primary); font-size: 1.1rem;">
          ${b.priceDisplay}
        </div>
      </a>
    `).join("");
  }
}

// Reusable Motorcycle Card HTML Generator
function createBikeCardHTML(bike) {
  const wishlist = getWishlist();
  const compareList = getCompareList();
  const isWish = wishlist.includes(bike.id);
  const isComp = compareList.includes(bike.id);

  return `
    <div class="bike-card fade-in" data-bike-id="${bike.id}">
      <div class="bike-card-top">
        <div class="bike-card-badges">
          <span class="badge badge-accent">${bike.categoryName}</span>
          ${bike.badge ? `<span class="badge">${bike.badge}</span>` : ""}
        </div>
        <div class="bike-card-actions-quick">
          <button class="btn-icon ${isWish ? 'active' : ''}" data-wishlist-id="${bike.id}" onclick="toggleWishlist('${bike.id}', event)" title="Add to Wishlist">
            ${isWish ? '♥' : '♡'}
          </button>
          <button class="btn-icon ${isComp ? 'active' : ''}" data-compare-id="${bike.id}" onclick="toggleCompare('${bike.id}', event)" title="Add to Compare">
            ⚖
          </button>
        </div>
        <img src="${bike.gallery.hero}" alt="${bike.brand} ${bike.model}" loading="lazy" onerror="handleImgError(this)">
      </div>

      <div class="bike-card-body">
        <div class="bike-card-brand">${bike.brand}</div>
        <h3 class="bike-card-title">${bike.model}</h3>
        
        <div class="bike-card-price-row">
          <span class="bike-card-price">${bike.priceDisplay}</span>
          <div class="bike-card-rating">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <span>${bike.rating}</span>
            <span style="color: var(--text-muted); font-size: 0.75rem;">(${bike.ratingCount})</span>
          </div>
        </div>

        <div class="bike-card-specs">
          <div class="spec-pill">
            <span class="spec-label">Engine</span>
            <span class="spec-val">${bike.engine}</span>
          </div>
          <div class="spec-pill">
            <span class="spec-label">Power</span>
            <span class="spec-val">${bike.power}</span>
          </div>
          <div class="spec-pill">
            <span class="spec-label">Mileage</span>
            <span class="spec-val">${bike.mileage}</span>
          </div>
        </div>

        <div class="bike-card-footer">
          <a href="bike-details.html?id=${bike.id}" class="btn btn-secondary btn-sm">
            View Details →
          </a>
          <button class="btn btn-primary btn-sm" onclick="openTestRideModal('${bike.id}')">
            Test Ride
          </button>
        </div>
      </div>
    </div>
  `;
}

// Test Ride Modal Handlers
function openTestRideModal(bikeId) {
  const modal = document.getElementById("testRideModal");
  if (!modal) return;

  const selectEl = document.getElementById("testRideBikeSelect");
  if (selectEl) {
    selectEl.innerHTML = MOTOX_DATA.bikes.map(b => `
      <option value="${b.id}" ${b.id === bikeId ? "selected" : ""}>
        ${b.brand} ${b.model} (${b.priceDisplay})
      </option>
    `).join("");
  }

  modal.classList.add("active");
}

function closeTestRideModal() {
  const modal = document.getElementById("testRideModal");
  if (modal) modal.classList.remove("active");
}

function handleTestRideSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("trName")?.value.trim();
  const phone = document.getElementById("trPhone")?.value.trim();
  const city = document.getElementById("trCity")?.value.trim();
  const bikeId = document.getElementById("testRideBikeSelect")?.value;
  const date = document.getElementById("trDate")?.value;
  const time = document.getElementById("trTime")?.value;

  if (!name || !phone || !city || !bikeId || !date || !time) {
    showToast("Please fill in all booking fields.", "warning");
    return;
  }

  const bike = getBikeById(bikeId);
  const booking = {
    id: "BK-" + Date.now().toString().slice(-6),
    bikeId,
    bikeName: bike ? `${bike.brand} ${bike.model}` : "Motorcycle",
    bikeImage: bike ? bike.gallery.hero : "",
    name,
    phone,
    city,
    date,
    time,
    status: "Confirmed (Dealer Contact in 2h)",
    createdAt: new Date().toLocaleDateString()
  };

  const bookings = getBookings();
  bookings.unshift(booking);
  saveBookings(bookings);

  closeTestRideModal();
  showToast("🎉 Test ride request submitted successfully! Saved in My Bookings.", "success");

  if (window.renderBookingsPage) window.renderBookingsPage();
}

// Global Image Fallback Handler
function handleImgError(img) {
  img.onerror = null;
  img.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250' fill='%2311151e'><rect width='400' height='250' fill='%23181e2b'/><circle cx='120' cy='170' r='40' stroke='%23ff3b30' stroke-width='4' fill='none'/><circle cx='280' cy='170' r='40' stroke='%23ff3b30' stroke-width='4' fill='none'/><path d='M120 170 L180 130 L220 130 L280 170 M180 130 L200 90 L240 90 L280 170 M200 90 L160 90' stroke='%23ffffff' stroke-width='4' fill='none'/><text x='200' y='230' font-family='sans-serif' font-size='12' fill='%2394a3b8' text-anchor='middle'>MOTOX MOTORCYCLE</text></svg>";
}

// Common Initialization on Page Load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateBadges();
  initSearch();

  // Sticky Navbar Scroll
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  // Bind Test Ride Modal form
  const trForm = document.getElementById("testRideForm");
  if (trForm) trForm.addEventListener("submit", handleTestRideSubmit);

  const trClose = document.getElementById("closeTestRideBtn");
  if (trClose) trClose.addEventListener("click", closeTestRideModal);
});
