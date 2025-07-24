export function checkHeading(str) {
  return /^.*:$/g.test(str) || /^\*{2}.*\*{2}$/.test(str);
}

export function replaceHeadingStars(str) {
  return String(str).replace(/\*/g, "").trim();
}
  
  
