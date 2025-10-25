// Minimal Turbopack/Next loader stub
// This file is referenced from `next.config.ts` as a loader for jsx/tsx files
// during development. The original project may provide a richer implementation
// for visual-edit tooling; this stub makes `require` succeed and passes source
// through unchanged so the dev server can start.

// Use CommonJS exports because the loader is required via `require()` in the
// Turbopack runtime.
module.exports = function componentTaggerLoader(source) {
  // If a callback-based loader API is expected, attempt to use it.
  // Otherwise just return the source synchronously.
  try {
    // If `this.async` exists it's the loader API; call the async callback.
    if (typeof this === 'object' && typeof this.async === 'function') {
      const cb = this.async();
      cb(null, source);
      return;
    }
  } catch (e) {
    // ignore and fall through to return
  }

  return source;
};
