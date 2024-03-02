const stringToSlug = (
  input: string,
  separator: string = '-',
  removeNumbers: boolean = false,
): string => {
  let slug = input

  // Remove URLs specific characters
  slug = slug.replace(/[:/]/g, '')

  // Optionally remove numbers
  if (removeNumbers) {
    slug = slug.replace(/\d+/g, '')
  }

  // Replace spaces and special characters with the separator
  slug = slug.replace(/[^a-zA-Z0-9]/g, separator)

  // Remove any duplicate separators that may have been created
  slug = slug.replace(new RegExp(`${separator}{2,}`, 'g'), separator)

  // Remove trailing separators
  slug = slug.replace(new RegExp(`^${separator}|${separator}$`, 'g'), '')

  return slug.toLowerCase()
}

export {stringToSlug}
