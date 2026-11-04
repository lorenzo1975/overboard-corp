export const registerFilter = `
const shopFilter = document.querySelector("#shop");
const providerFilter = document.createElement("select");
providerFilter.id = "provider";
providerFilter.add(new Option("All providers", ""));

const providerLabel = document.createElement("label");
providerLabel.htmlFor = providerFilter.id;
providerLabel.textContent = "Filter by provider";
shopFilter.after(" ", providerLabel, " ", providerFilter);

const rows = Array.from(document.querySelectorAll("tr[data-shop]"), row => {
  const label = row.cells[1]?.firstChild?.textContent?.trim() || "Unknown provider";
  const providers = label.split(" / ")
    .map(part => part.match(/^(AIS|3BB|NT|True)\\b/)?.[0])
    .filter(Boolean);
  return { row, providers: providers.length ? providers : [label] };
});

const shops = [...new Set(rows.map(({ row }) => row.dataset.shop))];
const providers = [...new Set(rows.flatMap(entry => entry.providers))].sort();
shops.forEach(shop => shopFilter.add(new Option(shop, shop)));
providers.forEach(provider => providerFilter.add(new Option(provider, provider)));

const shown = document.querySelector("#shown");
function applyFilters() {
  let count = 0;
  for (const { row, providers } of rows) {
    const matchesShop = !shopFilter.value || row.dataset.shop === shopFilter.value;
    const matchesProvider = !providerFilter.value || providers.includes(providerFilter.value);
    row.hidden = !matchesShop || !matchesProvider;
    if (!row.hidden) count++;
  }
  shown.textContent = count + (count === 1 ? " reference" : " references");
}
shopFilter.addEventListener("change", applyFilters);
providerFilter.addEventListener("change", applyFilters);
applyFilters();
document.querySelectorAll(".priority a").forEach(link => {
  link.addEventListener("click", () => {
    shopFilter.value = "";
    providerFilter.value = "";
    applyFilters();
  });
});
`;
