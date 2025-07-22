export function checkHeading(str) {
  return /^.*:$/g.test(str) || /^\*{2}.*\*{2}$/.test(str);
}

export function replaceHeadingStars(str) {
  return str.replace(/\*/g, "").trim();
}
  
  
