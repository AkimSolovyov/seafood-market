export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    'Nordic',
    'Pacific',
    'Atlantic',
    'Canadian',
    'Oceanic',
    'Marine',
    'Blue',
    'Coastal',
    'North',
    'Northern',
    'Norwegian',
    'Baltic',
    'Caribbean',
    'Azure',
    'Indian'
  ];

  const nouns = [
    'Market',
    'Bar',
    'Fish-Market',
    'Seafood-Bar',
    'Fair',
    'Emporium',
    'Bazaar',
    'Sea-Bazaar',
    'Trade',
    'Fish-Fair',
    'Seafood-Fair',
    'Ocean-Bar',
    'Ocean-Market',
    'Fish-Bar'
  ];

  return `${rando(adjectives)}-${rando(nouns)}`;
}
