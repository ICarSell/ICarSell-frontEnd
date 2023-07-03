export function generateColor(name: string): string {
  const nameValue = name
    .split("")
    .map((char) => char.charCodeAt(0))
    .reduce((acc, val) => acc + val, 0);

  const hue = nameValue % 360;

  return `hsl(${hue}, 70%, 50%)`;
}
