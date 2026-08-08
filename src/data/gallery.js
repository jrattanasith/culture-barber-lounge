// Dynamically import all images from the gallery-photos folder so
// new photos can be added without editing this file.
const modules = import.meta.glob(
  "../assets/gallery-photos/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

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
    image: file.default || file,
    // leave room for a barber name; edit items manually if you want to add barbers
    barber: "",
  };
});

export default gallery;
