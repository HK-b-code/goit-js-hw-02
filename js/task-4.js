// Variant 1

function getShippingCost(country) {
  switch (country) {
    case "China":
      return "Shipping to China will cost 100 credits";
      break;
    case "Chile":
      return "Shipping to Chile will cost 250 credits";
      break;
    case "Australia":
      return "Shipping to Australia will cost 170 credits";
      break;
    case "Jamaica":
      return "Shipping to Jamaica will cost 120 credits";
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// Variant 2

function getShippingCost(country) {
  const lowerCaseCountry = country.toLowerCase();
  let price;

  switch (lowerCaseCountry) {
    case "china":
      price = 100;
      break;
    case "chile":
      price = 250;
      break;
    case "australia":
      price = 170;
      break;
    case "jamaica":
      price = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }

  return `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
