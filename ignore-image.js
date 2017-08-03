function donothing() {
  return null;
}

require.extensions['.jpg'] = donothing;
// ..etc