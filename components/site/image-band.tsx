import Image from "next/image"

// Wide photo under a page title (formations, accélération). Owner-approved images: docs/image-sources.md.
export function ImageBand({ src, alt, position }: { src: string; alt: string; position: string }) {
  return (
    <figure className="ip-band">
      <Image
        src={src}
        alt={alt}
        width={1536}
        height={1024}
        sizes="(min-width: 1140px) 1080px, calc(100vw - 32px)"
        style={{ objectPosition: position }}
      />
    </figure>
  )
}
