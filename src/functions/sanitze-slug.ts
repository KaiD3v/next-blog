function sanitizeSlug(slug: string) {
  slug = slug
    .replaceAll("ç", "c")
    .replaceAll("ã", "a")
    .replaceAll("á", "a")
    .replaceAll("â", "a")
    .replaceAll("é", "e")
    .replaceAll("ê", "e")
    .replaceAll("í", "i")
    .replaceAll("ó", "o")
    .replaceAll("ô", "o")
    .replaceAll("õ", "o")
    .replaceAll("ú", "u")
    .replaceAll("ü", "u")
    .replaceAll(" ", "-");

  return slug;
}

export default sanitizeSlug;
