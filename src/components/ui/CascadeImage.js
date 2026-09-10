'use client'

// Tries a local photo first, falls back to a stock photo, then (optionally)
// reveals a sibling fallback element (e.g. an emoji tile) if both fail.
// Lets real photos be dropped in at /public/images/... without touching any code.
export function CascadeImage({ src, remoteSrc, alt, className, eager = false, hasFallbackSibling = true }) {
  return (
    <img
      src={src}
      data-remote={remoteSrc}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      onError={(e) => {
        const img = e.target
        if (img.dataset.stage !== 'remote' && img.dataset.remote) {
          img.dataset.stage = 'remote'
          img.src = img.dataset.remote
        } else {
          img.style.display = 'none'
          if (hasFallbackSibling && img.nextSibling) img.nextSibling.style.display = 'flex'
        }
      }}
    />
  )
}
