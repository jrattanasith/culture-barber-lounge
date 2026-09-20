// Dynamically import all images from the gallery-photos folder so
// new photos can be added without editing this file.
const modules = import.meta.glob(
  "../assets/gallery-photos/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

const captions = {
  "haircut 1": "Short, textured haircut with a clean drop fade on the sides",
  "haircut 2":
    "Short, textured crop with a clean taper fade on the sides and back",
  "haircut 3": "Low taper fade with textured hair on top",
  "haircut 4": "Clean skin fade on the sides and back",
  "haircut 5": "Clean mid fade with tapered sides",
  "haircut 6": "Short, textured crop with a skin fade",
  "haircut 7": "Modern taper fade",
  "haircut 8": "French crop with taper fade",
  "haircut 9": "Low taper fade",
  "haircut 10": "Mid-to-high skin fade",
  "haircut 11": "Mid fade with shaped beard",
  "haircut 12": "Textured haircut with low taper fade and trimmed beard",
  "haircut 13": "Buzz cut with drop skin fade",
  "haircut 14": "Textured layers with faded sides and tapered back",
  "haircut 15": "Short, textured crop with mid fade",
  "haircut 16": "Mid fade",
  "haircut 17": "Mid-drop skin fade with line-up",
};

const gallery = Object.keys(modules).map((path) => {
  const file = modules[path];
  // Derive a friendly title from the filename
  const parts = path.split("/");
  const filename = parts[parts.length - 1];
  const title = filename
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/[-_]/g, " ");

  return {
    title: title,
    alt: `${title} haircut at Culture Barber Lounge`,
    caption: captions[title] || title,
    image: file.default || file,
    // leave room for a barber name; edit items manually if you want to add barbers
    barber: "",
  };
});

export default gallery;
