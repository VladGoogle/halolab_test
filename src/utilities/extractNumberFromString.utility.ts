export function extractNumberFromString(str: string): number | null {
  const match = str.match(/\d+$/); // match one or more digits at the end of the string
  return match ? parseInt(match[0]) : null;
}
