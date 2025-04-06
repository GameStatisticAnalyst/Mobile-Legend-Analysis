
export default function ScrollArea({ className = "", ...props }) {
  return <div className={`relative overflow-auto [-webkit-overflow-scrolling:touch] ${className}`} {...props} />
}
