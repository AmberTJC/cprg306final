import Link from "next/link";

export default function Main()
{
  return(
    <main className="columns-1 bg-black">
      <div className="bg-black">
      <Link className="my-4 text-4xl hover:underline hover:text-slate-100 text-slate-300"  href = "./Character_sheet/">Character sheet</Link>
      </div>
      <div className="bg-black">
      <Link className="my-4 text-4xl hover:underline hover:text-slate-100 text-slate-300" href = "./spell-library/">Spell Library</Link>
      </div>
    </main>
  );
}