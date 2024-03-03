const stringToSlug = (
  input: string,
  separator: string = '-',
  removeNumbers: boolean = false,
): string => {
  let slug = input.normalize('NFD') // Normalize to decompose characters and diacritics

  // Replace "/" with the specified separator
  slug = slug.replace(/\//g, separator)

  // Optionally remove numbers
  if (removeNumbers) {
    slug = slug.replace(/\p{Number}+/gu, '')
  }

  // Replace spaces and special characters with the separator, using Unicode property escapes
  slug = slug.replace(/[^\p{Letter}\p{Number}]/gu, separator)

  // Remove any duplicate separators that may have been created
  slug = slug.replace(new RegExp(`${separator}{2,}`, 'g'), separator)

  // Remove trailing separators
  slug = slug.replace(new RegExp(`^${separator}|${separator}$`, 'g'), '')

  return slug.toLowerCase()
}

export {stringToSlug}
