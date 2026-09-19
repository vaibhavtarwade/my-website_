/**
 * MOTOX - Bike Details Engine (bike-details.html)
 * Gallery, Color Customizer, Performance Counters, Spec Tabs,
 * 20-Hotspot "Explore The Machine" X-Ray, and Pre-filled EMI Calculator.
 */

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const bikeId = urlParams.get("id") || "yamaha-r15-v4";
  const bike = getBikeById(bikeId) || MOTOX_DATA.bikes[0];

  if (!bike) return;

  // Track Recently Viewed
  addRecentlyViewed(bike.id);

  // Set Page Title
  document.title = `${bike.brand} ${bike.model} Specs, Parts & Comparison | MOTOX`;

  // Render Page Sections
  renderHeaderAndHero(bike);
  renderGallery(bike);
  renderColorSelector(bike);
  renderPerformance(bike);
  renderSpecTabs(bike);
  renderExploreMachine(bike);
  renderIntegratedEmi(bike);
  renderSimilarBikes(bike);
  renderRecentlyViewedSection();
  initCounters();

  function renderHeaderAndHero(bike) {
    const brandTag = document.getElementById("detailsBrandTag");
    const title = document.getElementById("detailsTitle");
    const tagline = document.getElementById("detailsTagline");
    const priceDisplay = document.getElementById("detailsPriceDisplay");
    const ratingVal = document.getElementById("detailsRatingVal");
    const ratingCount = document.getElementById("detailsRatingCount");
    const desc = document.getElementById("detailsDesc");
    const officialBtn = document.getElementById("officialBuyBtn");
    const testRideBtn = document.getElementById("detailsTestRideBtn");
    const wishBtn = document.getElementById("detailsWishBtn");
    const compBtn = document.getElementById("detailsCompBtn");

    if (brandTag) brandTag.textContent = `${bike.brand} • ${bike.categoryName}`;
    if (title) title.textContent = bike.model;
    if (tagline) tagline.textContent = `"${bike.tagline}"`;
    if (priceDisplay) priceDisplay.textContent = bike.priceDisplay;
    if (ratingVal) ratingVal.textContent = bike.rating;
    if (ratingCount) ratingCount.textContent = `(${bike.ratingCount} Reviews)`;
    if (desc) desc.textContent = bike.description;

    if (officialBtn) {
      officialBtn.href = bike.officialUrl;
      officialBtn.setAttribute("target", "_blank");
      officialBtn.setAttribute("rel", "noopener noreferrer");
    }

    if (testRideBtn) {
      testRideBtn.onclick = () => openTestRideModal(bike.id);
    }

    if (wishBtn) {
      const isWish = getWishlist().includes(bike.id);
      wishBtn.classList.toggle("active", isWish);
      wishBtn.setAttribute("data-wishlist-id", bike.id);
      wishBtn.onclick = (e) => toggleWishlist(bike.id, e);
    }

    if (compBtn) {
      const isComp = getCompareList().includes(bike.id);
      compBtn.classList.toggle("active", isComp);
      compBtn.setAttribute("data-compare-id", bike.id);
      compBtn.onclick = (e) => toggleCompare(bike.id, e);
    }
  }

  function renderGallery(bike) {
    const mainImg = document.getElementById("galleryMainImg");
    const thumbsContainer = document.getElementById("galleryThumbs");
    const zoomBtn = document.getElementById("galleryZoomBtn");

    const images = [
      { label: "Front 3/4", url: bike.gallery.hero },
      { label: "Front View", url: bike.gallery.front },
      { label: "Side View", url: bike.gallery.side },
      { label: "Rear View", url: bike.gallery.rear },
      { label: "Cockpit / Dashboard", url: bike.gallery.dashboard },
      { label: "Detail Shot", url: bike.gallery.detail }
    ];

    if (mainImg) {
      mainImg.src = images[0].url;
      mainImg.alt = `${bike.brand} ${bike.model}`;
    }

    if (thumbsContainer) {
      thumbsContainer.innerHTML = images.map((img, idx) => `
        <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-url="${img.url}">
          <img src="${img.url}" alt="${img.label}" onerror="handleImgError(this)">
        </div>
      `).join("");

      thumbsContainer.querySelectorAll(".gallery-thumb").forEach(thumb => {
        thumb.addEventListener("click", () => {
          thumbsContainer.querySelectorAll(".gallery-thumb").forEach(t => t.classList.remove("active"));
          thumb.classList.add("active");
          if (mainImg) {
            mainImg.style.opacity = "0.4";
            setTimeout(() => {
              mainImg.src = thumb.dataset.url;
              mainImg.style.opacity = "1";
            }, 150);
          }
        });
      });
    }

    if (zoomBtn && mainImg) {
      zoomBtn.addEventListener("click", () => {
        openLightbox(mainImg.src, `${bike.brand} ${bike.model}`);
      });
    }
  }

  function openLightbox(src, title) {
    let modal = document.getElementById("lightboxModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "lightboxModal";
      modal.className = "modal-overlay";
      modal.innerHTML = `
        <div style="position: relative; max-width: 90vw; max-height: 90vh;">
          <button id="closeLightbox" class="modal-close-btn" style="top: -20px; right: -20px;">✕</button>
          <img id="lightboxImg" src="" alt="" style="max-height: 85vh; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.8); object-fit: contain;">
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.id === "closeLightbox") {
          modal.classList.remove("active");
        }
      });
    }

    const lbImg = modal.querySelector("#lightboxImg");
    if (lbImg) {
      lbImg.src = src;
      lbImg.alt = title;
    }
    modal.classList.add("active");
  }

  function renderColorSelector(bike) {
    const swatchesContainer = document.getElementById("colorSwatches");
    const activeColorName = document.getElementById("activeColorName");
    const mainImg = document.getElementById("galleryMainImg");

    if (!swatchesContainer || !bike.colors || bike.colors.length === 0) return;

    if (activeColorName) activeColorName.textContent = bike.colors[0].name;

    swatchesContainer.innerHTML = bike.colors.map((c, idx) => `
      <div class="color-swatch-item ${idx === 0 ? 'active' : ''}" data-color-idx="${idx}">
        <div class="color-circle" style="background-color: ${c.hex};"></div>
        <span class="color-name-label">${c.name}</span>
      </div>
    `).join("");

    swatchesContainer.querySelectorAll(".color-swatch-item").forEach(item => {
      item.addEventListener("click", () => {
        swatchesContainer.querySelectorAll(".color-swatch-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        const idx = parseInt(item.dataset.colorIdx, 10);
        const color = bike.colors[idx];
        if (activeColorName) activeColorName.textContent = color.name;
        if (mainImg && color.image) {
          mainImg.style.opacity = "0.3";
          setTimeout(() => {
            mainImg.src = color.image;
            mainImg.style.opacity = "1";
          }, 150);
        }
        showToast(`Selected color: ${color.name}`, "info");
      });
    });
  }

  function renderPerformance(bike) {
    const perfGrid = document.getElementById("perfGrid");
    if (!perfGrid) return;

    const metrics = [
      { label: "Engine Displacement", value: parseInt(bike.displacement) || 0, unit: "CC", icon: "⚡", raw: bike.displacement },
      { label: "Peak Power Output", value: bike.powerValue, unit: "PS", icon: "🐎", raw: bike.power },
      { label: "Peak Engine Torque", value: bike.torqueValue, unit: "NM", icon: "⚙️", raw: bike.torque },
      { label: "0 to 100 KM/H", value: parseFloat(bike.acceleration) || 0, unit: "SEC", icon: "⏱️", raw: bike.acceleration },
      { label: "Top Speed", value: bike.topSpeedValue, unit: "KM/H", icon: "🏁", raw: bike.topSpeed },
      { label: "Certified Mileage / Range", value: bike.mileageValue, unit: bike.category === "electric" ? "KM" : "KM/L", icon: "⛽", raw: bike.mileage },
      { label: "Kerb Weight", value: parseInt(bike.weight) || 0, unit: "KG", icon: "⚖️", raw: bike.weight },
      { label: "Fuel Tank Capacity", value: parseInt(bike.fuelCapacity) || 0, unit: bike.category === "electric" ? "KWH" : "LITERS", icon: "🛢️", raw: bike.fuelCapacity }
    ];

    perfGrid.innerHTML = metrics.map(m => `
      <div class="perf-card fade-in">
        <div class="perf-icon">${m.icon}</div>
        <div class="perf-value">
          <span class="counter-val" data-target="${m.value}">${m.value}</span>
          <span class="perf-unit">${m.unit}</span>
        </div>
        <div class="perf-label">${m.label}</div>
      </div>
    `).join("");
  }

  function initCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseFloat(counter.getAttribute("data-target"));
          if (isNaN(target)) return;
          let current = 0;
          const isFloat = target % 1 !== 0;
          const step = target / 40;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = isFloat ? target.toFixed(1) : Math.round(target);
              clearInterval(timer);
            } else {
              counter.textContent = isFloat ? current.toFixed(1) : Math.round(current);
            }
          }, 25);
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".counter-val").forEach(el => observer.observe(el));
  }

  function renderSpecTabs(bike) {
    const tabHeaders = document.getElementById("specTabHeaders");
    const tabContent = document.getElementById("specTabContent");
    if (!tabHeaders || !tabContent) return;

    const tabs = [
      { id: "engine", label: "Engine & Power", data: bike.specifications.engine },
      { id: "transmission", label: "Transmission & Drive", data: bike.specifications.transmission },
      { id: "brakes", label: "Brakes & Safety", data: bike.specifications.brakes },
      { id: "suspension", label: "Suspension & Chassis", data: bike.specifications.suspension },
      { id: "dimensions", label: "Dimensions & Capacity", data: bike.specifications.dimensions },
      { id: "electronics", label: "Electricals & Console", data: bike.specifications.electronics }
    ];

    tabHeaders.innerHTML = tabs.map((t, idx) => `
      <button type="button" class="spec-tab-btn ${idx === 0 ? 'active' : ''}" data-tab="${t.id}">
        ${t.label}
      </button>
    `).join("");

    function showTab(tabId) {
      const currentTab = tabs.find(t => t.id === tabId) || tabs[0];
      if (!currentTab.data) {
        tabContent.innerHTML = `<div style="padding: 2rem; color: var(--text-muted);">No specifications available.</div>`;
        return;
      }

      tabContent.innerHTML = `
        <div class="specs-table-grid fade-in">
          ${Object.entries(currentTab.data).map(([key, val]) => `
            <div class="spec-row-item">
              <span class="spec-row-label">${key}</span>
              <span class="spec-row-value">${val}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    tabHeaders.querySelectorAll(".spec-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        tabHeaders.querySelectorAll(".spec-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        showTab(btn.dataset.tab);
      });
    });

    showTab(tabs[0].id);
  }

  // ⭐ 20-Hotspot "Explore The Machine" Engine
  function renderExploreMachine(bike) {
    const machineStage = document.getElementById("machineStageHotspots");
    const partInfoCard = document.getElementById("partInfoDisplay");
    const categoryFilterBtns = document.querySelectorAll(".hotspot-category-btn");
    if (!machineStage || !partInfoCard) return;

    const parts = MOTOX_DATA.partsCatalog;
    const partKeys = Object.keys(parts);

    // Render Hotspot Pins over bike anatomy canvas
    machineStage.innerHTML = `
      <img src="${bike.gallery.side || bike.gallery.hero}" class="machine-stage-bg" alt="Motorcycle Anatomy View" onerror="handleImgError(this)">
      ${partKeys.map(key => {
        const p = parts[key];
        return `
          <div class="hotspot-pin" data-part="${key}" data-category="${p.category}" style="left: ${p.hotspot.x}%; top: ${p.hotspot.y}%;">
            <div class="hotspot-pin-pulse"></div>
            <div class="hotspot-pin-inner"></div>
            <div class="hotspot-pin-tooltip">${p.name}</div>
          </div>
        `;
      }).join("")}
    `;

    function displayPartInfo(partKey) {
      const part = parts[partKey];
      if (!part) return;

      // Update active pin
      machineStage.querySelectorAll(".hotspot-pin").forEach(pin => {
        pin.classList.toggle("active", pin.dataset.part === partKey);
      });

      partInfoCard.innerHTML = `
        <div class="part-info-card">
          <div class="part-card-img-wrap">
            <img src="${part.image}" alt="${part.name}" onerror="handleImgError(this)">
          </div>
          <div>
            <span class="part-badge-tag">${part.category}</span>
            <h4 class="part-title">${part.name}</h4>
            <p class="part-desc" style="margin-top: 0.4rem;">${part.shortSummary}</p>
          </div>

          <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
            <strong>Mechanical Function:</strong><br>
            ${part.details.function}
          </div>

          <ul class="part-specs-list">
            ${part.details.specs.map(s => `<li>${s}</li>`).join("")}
          </ul>

          <div class="part-tip-box">
            <strong>Pro Maintenance Tip:</strong><br>
            ${part.details.maintenanceTip}
          </div>
        </div>
      `;
    }

    // Attach click listeners to hotspots
    machineStage.querySelectorAll(".hotspot-pin").forEach(pin => {
      pin.addEventListener("click", () => {
        displayPartInfo(pin.dataset.part);
      });
    });

    // Hotspot Category Filters
    categoryFilterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryFilterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.categoryFilter;

        machineStage.querySelectorAll(".hotspot-pin").forEach(pin => {
          if (filter === "all" || pin.dataset.category.toLowerCase().includes(filter.toLowerCase())) {
            pin.style.display = "block";
          } else {
            pin.style.display = "none";
          }
        });
      });
    });

    // Default display Engine
    displayPartInfo("engine");
  }

  // Pre-filled Financial EMI Calculator
  function renderIntegratedEmi(bike) {
    const priceSlider = document.getElementById("emiPriceSlider");
    const dpSlider = document.getElementById("emiDpSlider");
    const tenureSlider = document.getElementById("emiTenureSlider");
    const rateSlider = document.getElementById("emiRateSlider");

    const priceVal = document.getElementById("emiPriceVal");
    const dpVal = document.getElementById("emiDpVal");
    const tenureVal = document.getElementById("emiTenureVal");
    const rateVal = document.getElementById("emiRateVal");

    const monthlyDisplay = document.getElementById("emiMonthlyVal");
    const totalInterestDisplay = document.getElementById("emiTotalInterestVal");
    const totalPayableDisplay = document.getElementById("emiTotalPayableVal");
    const resetBtn = document.getElementById("emiResetBtn");

    if (!priceSlider) return;

    // Initialize with bike price
    priceSlider.value = bike.price;

    function calculateEmi() {
      const p = parseFloat(priceSlider.value);
      const dpPercent = parseFloat(dpSlider.value);
      const downPayment = (p * dpPercent) / 100;
      const principal = p - downPayment;
      const annualRate = parseFloat(rateSlider.value);
      const tenureMonths = parseInt(tenureSlider.value, 10);

      // Monthly interest rate
      const r = (annualRate / 12) / 100;
      // EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
      let emi = 0;
      if (r > 0) {
        emi = (principal * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1);
      } else {
        emi = principal / tenureMonths;
      }

      const totalRepay = emi * tenureMonths;
      const totalInterest = totalRepay - principal;
      const totalCost = totalRepay + downPayment;

      // Update UI
      if (priceVal) priceVal.textContent = `₹${p.toLocaleString('en-IN')}`;
      if (dpVal) dpVal.textContent = `${dpPercent}% (₹${Math.round(downPayment).toLocaleString('en-IN')})`;
      if (tenureVal) tenureVal.textContent = `${tenureMonths} Months (${(tenureMonths/12).toFixed(1)} Yrs)`;
      if (rateVal) rateVal.textContent = `${annualRate.toFixed(2)}% p.a.`;

      if (monthlyDisplay) monthlyDisplay.textContent = `₹${Math.round(emi).toLocaleString('en-IN')}`;
      if (totalInterestDisplay) totalInterestDisplay.textContent = `₹${Math.round(totalInterest).toLocaleString('en-IN')}`;
      if (totalPayableDisplay) totalPayableDisplay.textContent = `₹${Math.round(totalCost).toLocaleString('en-IN')}`;
    }

    priceSlider.addEventListener("input", calculateEmi);
    dpSlider.addEventListener("input", calculateEmi);
    tenureSlider.addEventListener("input", calculateEmi);
    rateSlider.addEventListener("input", calculateEmi);

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        priceSlider.value = bike.price;
        dpSlider.value = 20;
        tenureSlider.value = 36;
        rateSlider.value = 8.5;
        calculateEmi();
        showToast("EMI Calculator values reset to default", "info");
      });
    }

    calculateEmi();
  }

  function renderSimilarBikes(bike) {
    const container = document.getElementById("similarBikesGrid");
    if (!container) return;

    const similar = MOTOX_DATA.bikes
      .filter(b => b.id !== bike.id && (b.category === bike.category || b.brandId === bike.brandId))
      .slice(0, 3);

    container.innerHTML = similar.map(b => createBikeCardHTML(b)).join("");
  }

  function renderRecentlyViewedSection() {
    const container = document.getElementById("recentlyViewedGrid");
    if (!container) return;

    const recentIds = getRecentlyViewed().filter(id => id !== bike.id);
    const recentBikes = recentIds.map(id => getBikeById(id)).filter(Boolean).slice(0, 3);

    if (recentBikes.length === 0) {
      container.parentElement.style.display = "none";
      return;
    }

    container.innerHTML = recentBikes.map(b => createBikeCardHTML(b)).join("");
  }
});
