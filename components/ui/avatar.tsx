import Image from "next/image"

export default function Avatar({ src = "/images/profile.jpg", alt = "no name", fallback, className = "" }) {
  return (
    <div className={`relative inline-block overflow-hidden `}>
      {src ? (
        <Image src={src} alt={alt} width={50} height={50} className={`${className}`}/>
      ) : (
        <div className="bg-gray300 text-gray-700 flex h-full w-full items-center justify-center">
          {fallback || alt.charAt(0)}
        </div>
      )}
    </div>
  )
}
