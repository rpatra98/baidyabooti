import { Allura, Encode_Sans_Expanded } from "next/font/google";
import './aboutUsCss.module.css';

const allura = Allura({
    weight:'400',
    subsets:['latin'],
    variable:'--font-allura'
})

const ense = Encode_Sans_Expanded({
    subsets:['latin-ext'],
    weight:['400', '700'],
    variable:'--font-ense'
})

export default function Layout({children}){
    return(
        <>
            <div className="allura.variable ense.variable">
                {children}
            </div>
        </>
    )
}