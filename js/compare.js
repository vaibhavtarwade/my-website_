/**
 * MOTOX - Multi-Bike Comparison Engine (compare.html)
 * Side-by-side comparison matrix of up to 3 motorcycles with diff highlighting.
 */

function renderComparePage() {
  const compareSlotsContainer = document.getElementById("compareSlotsContainer");
  const compareTableContainer = document.getElementById("compareTableContainer");
  const compareCountBadge = document.getElementById("compareTotalCount");
  const clearCompareBtn = document.getElementById("clearCompareAllBtn");

  if (!compareSlotsContainer) return;

  const compareIds = getCompareList();
  const bikes = compareIds.map(id => getBikeById(id)).filter(Boolean);

  if (compareCountBadge) {
    compareCountBadge.textContent = `${bikes.length} / 3 Selected`;
  }

  // Render 3 Selection Slots
  let slotsHTML = "";
  for (let i = 0; i < 3; i++) {
    const bike = bikes[i];
    if (bike) {
      slotsHTML += `
        <div class="compare-slot-card filled fade-in">
          <button class="btn-icon" style="position: absolute; top: 10px; right: 10px;" onclick="removeCompareBike('${bike.id}')" title="Remove">✕</button>
          <img src="${bike.gallery.hero}" alt="${bike.brand} ${bike.model}" onerror="handleImgError(this)">
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent-primary); font-weight: 700;">${bike.brand}</div>
          <h4 style="font-size: 1.15rem; font-weight: 800; margin: 0.2rem 0;">${bike.model}</h4>
          <div style="font-family: var(--font-heading); font-weight: 800; font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0.75rem;">${bike.priceDisplay}</div>
          <a href="bike-details.html?id=${bike.id}" class="btn btn-secondary btn-sm" style="width: 100%;">View Full Specs</a>
        </div>
      `;
    } else {
      slotsHTML += `
        <div class="compare-slot-card">
          <div style="font-size: 2.2rem; color: var(--text-muted); margin-bottom: 0.5rem;">➕</div>
          <div style="font-weight: 700; color: var(--text-secondary); margin-bottom: 0.2rem;">Add Motorcycle</div>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">Select a bike to compare side-by-side</p>
          <button class="btn btn-outline btn-sm" onclick="openAddBikeCompareModal()">+ Choose Bike</button>
        </div>
      `;
    }
  }
  compareSlotsContainer.innerHTML = slotsHTML;

  if (bikes.length === 0) {
    compareTableContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">⚖️</div>
        <h3 class="empty-state-title">No motorcycles in comparison</h3>
        <p class="empty-state-text">Select at least two motorcycles from our catalog to compare their power, mileage, prices, and engineering specs side by side.</p>
        <a href="bikes.html" class="btn btn-primary">Browse All Bikes</a>
      </div>
    `;
    return;
  }

  // Build Comparative Specifications Matrix
  const specRows = [
    { label: "Price (Ex-Showroom)", getVal: b => b.priceDisplay },
    { label: "Category / Style", getVal: b => b.categoryName },
    { label: "Engine Displacement", getVal: b => b.displacement },
    { label: "Max Power Output", getVal: b => b.power },
    { label: "Max Peak Torque", getVal: b => b.torque },
    { label: "0 to 100 KM/H Acceleration", getVal: b => b.acceleration },
    { label: "Top Speed", getVal: b => b.topSpeed },
    { label: "Mileage / Certified Range", getVal: b => b.mileage },
    { label: "Kerb Weight", getVal: b => b.weight },
    { label: "Fuel Capacity", getVal: b => b.fuelCapacity },
    { label: "Transmission / Clutch", getVal: b => b.transmission },
    { label: "Front Suspension", getVal: b => b.specifications.suspension["Front Suspension"] || "-" },
    { label: "Rear Suspension", getVal: b => b.specifications.suspension["Rear Suspension"] || "-" },
    { label: "Front Brake System", getVal: b => b.specifications.brakes["Front Brake"] || "-" },
    { label: "ABS Type", getVal: b => b.specifications.brakes["ABS"] || "-" },
    { label: "Instrument Cluster", getVal: b => b.specifications.electronics["Display"] || b.specifications.electronics["Instrument Cluster"] || "-" },
    { label: "Official Purchase Portal", getVal: b => `<a href="${b.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="font-size: 0.75rem;">Official Website ↗</a>` }
  ];

  let tableHTML = `
    <div class="compare-table-wrap fade-in">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Specification Feature</th>
            ${bikes.map(b => `
              <th style="text-align: center;">
                <div style="color: var(--accent-primary); font-size: 0.75rem;">${b.brand}</div>
                <div style="font-size: 1.1rem; font-weight: 800;">${b.model}</div>
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody>
          ${specRows.map(row => {
            const values = bikes.map(b => row.getVal(b));
            const isDiff = new Set(values.map(v => typeof v === 'string' ? v.trim() : v)).size > 1 && bikes.length > 1;
            return `
              <tr>
                <td><strong>${row.label}</strong></td>
                ${values.map(v => `
                  <td style="text-align: center;" class="${isDiff ? 'diff-highlight' : ''}">${v}</td>
                `).join("")}
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;

  compareTableContainer.innerHTML = tableHTML;

  if (clearCompareBtn) {
    clearCompareBtn.onclick = () => {
      saveCompareList([]);
      renderComparePage();
      showToast("Comparison cleared", "info");
    };
  }
}

function removeCompareBike(bikeId) {
  let list = getCompareList().filter(id => id !== bikeId);
  saveCompareList(list);
  renderComparePage();
  showToast("Removed from comparison", "info");
}

function openAddBikeCompareModal() {
  let modal = document.getElementById("addCompareBikeModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "addCompareBikeModal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-dialog" style="max-width: 650px;">
        <button class="modal-close-btn" onclick="document.getElementById('addCompareBikeModal').classList.remove('active')">✕</button>
        <h3 style="margin-bottom: 0.5rem;">Add Motorcycle to Compare</h3>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem;">Select from our catalog to add to comparison</p>
        <div id="compareBikePickerList" style="display: flex; flex-direction: column; gap: 0.75rem; max-height: 450px; overflow-y: auto;"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  const listContainer = document.getElementById("compareBikePickerList");
  const currentList = getCompareList();

  listContainer.innerHTML = MOTOX_DATA.bikes.map(b => {
    const isAlready = currentList.includes(b.id);
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-surface-elevated); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="${b.gallery.hero}" alt="${b.brand} ${b.model}" style="width: 60px; height: 42px; object-fit: contain;" onerror="handleImgError(this)">
          <div>
            <div style="font-size: 0.75rem; color: var(--accent-primary); font-weight: 700;">${b.brand} • ${b.categoryName}</div>
            <div style="font-weight: 800; color: var(--text-primary);">${b.model}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${b.priceDisplay} | ${b.power}</div>
          </div>
        </div>
        <button class="btn btn-sm ${isAlready ? 'btn-secondary' : 'btn-primary'}" ${isAlready ? 'disabled' : ''} onclick="addBikeToCompare('${b.id}')">
          ${isAlready ? 'Added' : '+ Select'}
        </button>
      </div>
    `;
  }).join("");

  modal.classList.add("active");
}

function addBikeToCompare(bikeId) {
  let list = getCompareList();
  if (list.length >= 3) {
    showToast("Comparison limit reached (Max 3 motorcycles)", "warning");
    return;
  }
  if (!list.includes(bikeId)) {
    list.push(bikeId);
    saveCompareList(list);
    showToast("Added to comparison!", "success");
  }
  const modal = document.getElementById("addCompareBikeModal");
  if (modal) modal.classList.remove("active");
  renderComparePage();
}

document.addEventListener("DOMContentLoaded", () => {
  renderComparePage();
});
