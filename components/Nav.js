import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (

    <>
      <Link href="/pages/index.js">
        <banner>

          <h1>
           NEWS FOR STUDENTS BY STUDENTS
          </h1>

         <Image
            src="/banner-logo.png"
            alt="FBS VOICE Banner Image"
            width={500}
            height={150}
           loading="eager"
          />
        
        </banner>
      </Link>
      <nav>

      </nav>

    </>
  );
}

export default Nav;
