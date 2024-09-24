import { cubicBezier } from 'framer-motion';

export const easeEx = cubicBezier(0.2, 0, 0, 1);
const easePr = cubicBezier(0.4, 0, 0.2, 1);
const easeLinear = cubicBezier(0, 0, 1, 1);
export const easeOutExpo = cubicBezier(0.16, 1, 0.03, 1);
