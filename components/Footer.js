import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-center text-sm bg-greenLoco text-white p-2">
      Developed by
      <Link href="https://facuperezm.vercel.app/">Facundo Perez Montalvo</Link>
    </div>
  );
}
