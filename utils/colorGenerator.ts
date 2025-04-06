export default function generateRandomColor(): string {
  // Generate vibrant colors that are visually distinct
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70 + Math.floor(Math.random() * 30); // 70-100%
  const lightness = 45 + Math.floor(Math.random() * 15); // 45-60%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
