import Image from "next/image";
import Link from "next/link";

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
      <navbar>

        <div class="dropdown">
          <Link href="/" title="Home">Home</Link>

          <div class="dropdownContent">
            <Link href="/category/News" title="News">News</Link>
            <Link href="/category/Reviews" title="Reviews">Reviews</Link>
            <Link href="/category/School" title="School">School</Link>
            <Link href="/category/Sport" title="Sport">Sport</Link>
          </div>
        </div>

        <Link href="mailto:20tjohnton@fulhamboysschool.org.uk" class="right hideable" title="Contact">Contact</Link>

      </navbar>

    </>
  );
}

export default Nav;
