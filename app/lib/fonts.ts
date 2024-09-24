import localFont from 'next/font/local';

/*
 * Legal Disclaimer for Web licence
 *
 * Licence to use self-hosted webfonts for displaying dynamic text on specified website domains. Our package includes WOFF and WOFF2 font formats.
 *
 * Should the license page views limit be exceeded the license holder will be required to contact Lineto.com for an upgrade.
 *
 * It is strictly prohibited to rename the font and to download or use these fonts in any other media.
 *
 * These Web fonts are licensed exclusively for the use on the following domain(s) and their subdomains:
 *
 * sky.money (monthly pageviews: < 5M)
 *
 */

const graphikStd = localFont({ src: '../../app/fonts/Graphik-Regular-Web.woff2' });
const circleStd = localFont({ src: '../../app/fonts/CircularXXWeb-Book.woff2' });
const helvetika = localFont({ src: '../../app/fonts/HelveticaNeueBold.otf' });

export const graphikStdClassName = graphikStd.className;
export const circleStdClassName = circleStd.className;
const helvetikaClassName = helvetika.className;
