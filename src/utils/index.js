export function hexToRgb(hex) {
    console.log(hex)
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  export const isLight = (r, g, b) => {
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return yiq < 128;}