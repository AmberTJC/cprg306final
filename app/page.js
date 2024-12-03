import Link from "next/link";

export default function Main()
{
  return(
    <main>
      <Link href = "./Character_sheet/">Character sheet</Link>
      <Link href = "./spell-library/">Spell Library</Link>
    </main>
  );
}