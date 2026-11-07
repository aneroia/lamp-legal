import localFont from "next/font/local";

export const bodyFont = localFont({
  variable: "--font-manrope",
  src: [
    {path:'./fonts/manrope-300.ttf',weight:'300'},
    {path:'./fonts/manrope-400.ttf',weight:'400'},
    {path:'./fonts/manrope-500.ttf',weight:'500'},
    {path:'./fonts/manrope-600.ttf',weight:'600'},
    {path:'./fonts/manrope-700.ttf',weight:'700'},
    {path:'./fonts/manrope-800.ttf',weight:'800'},
  ],
  display: "swap",
});
