/**
 * MOTOX - Catalog & Filter System (bikes.html)
 * High-performance multifaceted client-side filtering, sorting, and search sync.
 */

document.addEventListener("DOMContentLoaded", () => {
  const bikesGrid = document.getElementById("catalogBikesGrid");
  const resultCount = document.getElementById("catalogResultCount");
  const sortSelect = document.getElementById("catalogSortSelect");
  const searchInput = document.getElementById("catalogSearchInput");
  const clearFiltersBtn = document.getElementById("clearFiltersBtn");

  // Filters State
  let filters = {
    search: "",
    brands: [],
    categories: [],
    maxPrice: 2500000,
    maxEngine: 1300,
    fuelTypes: [],
    sort: "popular"
  };

  // Parse URL Parameters (e.g. ?category=sports or ?brand=yamaha)
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");
  const brandParam = urlParams.get("brand");
  const searchParam = urlParams.get("q");

  if (categoryParam) filters.categories.push(categoryParam.toLowerCase());
  if (brandParam) filters.brands.push(brandParam.toLowerCase());
  if (searchParam) filters.search = searchParam.toLowerCase();

  // Populate Filter Controls UI
  initFilterControls();
  applyFilters();

  function initFilterControls() {
    // Brand Chips
    const brandChipsWrap = document.getElementById("brandFilterChips");
    if (brandChipsWrap) {
      brandChipsWrap.innerHTML = MOTOX_DATA.brands.map(b => `
        <button type="button" class="filter-chip ${filters.brands.includes(b.id) ? 'active' : ''}" data-brand="${b.id}">
          ${b.name}
        </button>
      `).join("");

      brandChipsWrap.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          const brandId = chip.dataset.brand;
          chip.classList.toggle("active");
          if (filters.brands.includes(brandId)) {
            filters.brands = filters.brands.filter(id => id !== brandId);
          } else {
            filters.brands.push(brandId);
          }
          applyFilters();
        });
      });
    }

    // Category Chips
    const catChipsWrap = document.getElementById("categoryFilterChips");
    if (catChipsWrap) {
      catChipsWrap.innerHTML = MOTOX_DATA.categories.map(c => `
        <button type="button" class="filter-chip ${filters.categories.includes(c.id) ? 'active' : ''}" data-category="${c.id}">
          ${c.name}
        </button>
      `).join("");

      catChipsWrap.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          const catId = chip.dataset.category;
          chip.classList.toggle("active");
          if (filters.categories.includes(catId)) {
            filters.categories = filters.categories.filter(id => id !== catId);
          } else {
            filters.categories.push(catId);
          }
          applyFilters();
        });
      });
    }

    // Price Slider
    const priceSlider = document.getElementById("priceSlider");
    const priceDisplay = document.getElementById("priceDisplayVal");
    if (priceSlider && priceDisplay) {
      priceSlider.addEventListener("input", (e) => {
        filters.maxPrice = parseInt(e.target.value, 10);
        priceDisplay.textContent = filters.maxPrice >= 2500000 ? "Any (₹25L+)" : `₹${(filters.maxPrice / 100000).toFixed(2)} Lakh`;
        applyFilters();
      });
    }

    // Engine Capacity Slider
    const engineSlider = document.getElementById("engineSlider");
    const engineDisplay = document.getElementById("engineDisplayVal");
    if (engineSlider && engineDisplay) {
      engineSlider.addEventListener("input", (e) => {
        filters.maxEngine = parseInt(e.target.value, 10);
        engineDisplay.textContent = filters.maxEngine >= 1300 ? "Any (1300cc+)" : `${filters.maxEngine} cc`;
        applyFilters();
      });
    }

    // Fuel Type Chips
    const fuelChipsWrap = document.getElementById("fuelFilterChips");
    if (fuelChipsWrap) {
      fuelChipsWrap.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          const fuel = chip.dataset.fuel;
          chip.classList.toggle("active");
          if (filters.fuelTypes.includes(fuel)) {
            filters.fuelTypes = filters.fuelTypes.filter(f => f !== fuel);
          } else {
            filters.fuelTypes.push(fuel);
          }
          applyFilters();
        });
      });
    }

    // Sort Dropdown
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        filters.sort = e.target.value;
        applyFilters();
      });
    }

    // Inline Search Input
    if (searchInput) {
      if (filters.search) searchInput.value = filters.search;
      searchInput.addEventListener("input", (e) => {
        filters.search = e.target.value.trim().toLowerCase();
        applyFilters();
      });
    }

    // Clear All Filters
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", () => {
        filters = {
          search: "",
          brands: [],
          categories: [],
          maxPrice: 2500000,
          maxEngine: 1300,
          fuelTypes: [],
          sort: "popular"
        };

        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        if (priceSlider) priceSlider.value = 2500000;
        if (priceDisplay) priceDisplay.textContent = "Any (₹25L+)";
        if (engineSlider) engineSlider.value = 1300;
        if (engineDisplay) engineDisplay.textContent = "Any (1300cc+)";
        if (searchInput) searchInput.value = "";
        if (sortSelect) sortSelect.value = "popular";

        applyFilters();
        showToast("All filters reset", "info");
      });
    }
  }

  function applyFilters() {
    let filtered = MOTOX_DATA.bikes.filter(bike => {
      // Search
      if (filters.search) {
        const q = filters.search;
        const matches = bike.brand.toLowerCase().includes(q) ||
          bike.model.toLowerCase().includes(q) ||
          bike.categoryName.toLowerCase().includes(q) ||
          bike.engine.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Brand
      if (filters.brands.length > 0 && !filters.brands.includes(bike.brandId.toLowerCase())) {
        return false;
      }

      // Category
      if (filters.categories.length > 0 && !filters.categories.includes(bike.category.toLowerCase())) {
        return false;
      }

      // Max Price
      if (filters.maxPrice < 2500000 && bike.price > filters.maxPrice) {
        return false;
      }

      // Max Engine (approx parse number)
      const bikeEngineNum = parseInt(bike.engine, 10) || (bike.category === "electric" ? 500 : 0);
      if (filters.maxEngine < 1300 && bikeEngineNum > filters.maxEngine) {
        return false;
      }

      // Fuel Type
      if (filters.fuelTypes.length > 0) {
        const isEV = bike.category === "electric";
        const matchesEV = filters.fuelTypes.includes("electric") && isEV;
        const matchesPetrol = filters.fuelTypes.includes("petrol") && !isEV;
        if (!matchesEV && !matchesPetrol) return false;
      }

      return true;
    });

    // Sorting
    switch (filters.sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "power":
        filtered.sort((a, b) => b.powerValue - a.powerValue);
        break;
      case "engine":
        filtered.sort((a, b) => (parseInt(b.engine) || 0) - (parseInt(a.engine) || 0));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
      default:
        filtered.sort((a, b) => b.ratingCount - a.ratingCount);
        break;
    }

    renderBikes(filtered);
  }

  function renderBikes(bikes) {
    if (resultCount) {
      resultCount.textContent = `Showing ${bikes.length} Motorcycle${bikes.length === 1 ? '' : 's'}`;
    }

    if (!bikesGrid) return;

    if (bikes.length === 0) {
      bikesGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">🏍️</div>
          <h3 class="empty-state-title">No motorcycles found</h3>
          <p class="empty-state-text">No bikes match your current filter criteria. Try adjusting your budget, engine capacity, or clearing applied filters.</p>
          <button class="btn btn-primary" onclick="document.getElementById('clearFiltersBtn')?.click()">Reset Filters</button>
        </div>
      `;
      return;
    }

    bikesGrid.innerHTML = bikes.map(bike => createBikeCardHTML(bike)).join("");
  }
});
