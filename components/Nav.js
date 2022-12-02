import Link from "next/link";
import BannerImg from "/public/banner-logo.png"

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
      />

        <img src="banner-logo.png" alt="FBS VOICE Banner Image" height="150px"/>

      </banner>
      <nav>

      </nav>

    </>
  );
}

export default Nav;
