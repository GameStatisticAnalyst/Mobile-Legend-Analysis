import Image from "next/image"

export default function Avatar({ src, alt = "", fallback, className = "" }) {
  return (
    <div className={`relative inline-block h-10 w-10 overflow-hidden rounded-full ${className}`}>
      {src ? (
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
      ) : (
        <div className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center">
          {fallback || alt.charAt(0)}
        </div>
      )}
    </div>
  )
}
