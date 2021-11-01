const size = {
  xs: "320px",
  sm: "768px",
  lg: "1200px",
  xl: "1900px",
 }
 const device = {
  minxs: `(min-width: ${size.xs})`,
  minsm: `(min-width: ${size.sm})`,
  minlg: `(min-width: ${size.lg})`,
  minxl: `(min-width: ${size.xl})`,
  maxxs: `(max-width: ${size.xs})`,
  maxsm: `(max-width: ${size.sm})`,
  maxlg: `(max-width: ${size.lg})`,
  maxxl: `(max-width: ${size.xl})`,
 }
 export default {size, device}