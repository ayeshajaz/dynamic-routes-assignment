import Link from "next/link"
export default function Country(){
  return(
    <div>
      &nbsp;<u><h1 className="flex justify-center"><b>List of countries</b></h1></u>
        <li className="flex justify-center"><Link href="/country/pakistan">Pakistan</Link></li>
        <li className="flex justify-center"><Link href="/country/india">India</Link></li>
        <li className="flex justify-center"><Link href="/country/china">China</Link></li>
        <li className="flex justify-center"><Link href="/country/russia">Russia</Link></li>
        <li className="flex justify-center"><Link href="/country/egypt">Egypt</Link></li>
    </div>
  )
}
