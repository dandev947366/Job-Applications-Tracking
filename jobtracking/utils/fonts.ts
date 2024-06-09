import { Manrope} from "next/font/google";
import { Molle} from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], variable:"--font-manrope" });
const molle = Molle({ subsets: ["latin"], weight:["400"], variable:"--font-molle" });

export{manrope, molle}