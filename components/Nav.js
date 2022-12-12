import Image from "next/image";

function Nav() {
  return (

    <>
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
      <nav>

      </nav>

    </>
  );
}

export default Nav;
