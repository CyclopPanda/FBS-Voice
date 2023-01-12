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

        <div className="dropdown">

          <Link href="/" title="Home" id="no-mobile">Home</Link>
          <a title="Menu" id="mobile">Menu</a>

          <div className="dropdownContent">
            <Link href="/" title="Home" id="mobile">Home</Link>
            <Link href="/category/News" title="News">News</Link>
            <Link href="/category/Commentary" title="Commentary">Commentary</Link>
            <Link href="/category/Review" title="Review">Review</Link>
            <Link href="/category/Sport" title="Sport">Sport</Link>
          </div>
        </div>

        <Link href="mailto:20tjohnton@fulhamboysschool.org.uk" className="right hideable" title="Contact">Contact</Link>

      </navbar>

    </>
  );
}

export default Nav;
