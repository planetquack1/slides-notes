
async function loadMetadata(title, series) {
  const path = `./sermons/${series}/${title}/metadata.json`;
  try {
    const metadata = await import(path);
    console.log(metadata)
    return metadata
  } catch (error) {
    console.error('Error loading metadata:', error);
  }
}

export default loadMetadata