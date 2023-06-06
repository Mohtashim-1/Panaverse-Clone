import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";
import Link from "next/link";
// import Wrapper from "../Shared/Wrapper";
import Wrapper from "@/Compoenents/Shared/Wrapper";
const Header = () => {
  return (
    <Wrapper>
      <header className="sticky top-0 flex items-center justify-between py-4 bg-white">
        {/* Logo */}
        <div>
          {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
          <Image src={Logo} alt="logo"></Image>
        </div>

        {/* Navigatin Bar */}

        <ul className="flex space-x-8 font-bold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/coarses"}>Coarses</Link>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
};

export default Header;
