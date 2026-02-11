import Image from "next/image";
import Link from "next/link";

export default function GTS() {
  return (
    <div className="bg-black flex items-center justify-center gap-2 py-1 mx-auto text-center">
      <p className="font-josefin text-white">Site criado pela</p>
      <Link
        href="https://www.gtscreations.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <Image src={"/images/gts.png"} alt="logo" width={100} height={100} />
      </Link>
    </div>
  );
}
