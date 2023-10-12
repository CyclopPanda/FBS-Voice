import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (

    <>
      <banner>
        <Image
          src="/banner-logo.png"
          alt="FBS VOICE Banner Image"
          width={500}
          height={150}
          loading="eager"
        />

        <h1>
          NEWS FOR STUDENTS BY STUDENTS
        </h1>
        
      </banner>
      <navbar>

        <div className="dropdown" class="mobile">
          <a title="Menu" class="mobile">Menu</a>

          <div className="dropdownContent" class="mobile">
            <Link href="/" title="Home" >Home</Link>
            <Link href="/category/News" title="News">News</Link>
            <Link href="/category/Commentary" title="Commentary">Commentary</Link>
            <Link href="/category/Review" title="Review">Review</Link>
            <Link href="/category/Sport" title="Sport">Sport</Link>
          </div>
        </div>
        
        <Link href="/" title="Home" class="no-mobile">Home</Link>
        <Link href="/category/News" title="News" class="no-mobile">News</Link>
        <Link href="/category/Commentary" title="Commentary" class="no-mobile">Commentary</Link>
        <Link href="/category/Review" title="Review" class="no-mobile">Review</Link>
        <Link href="/category/Sport" title="Sport" class="no-mobile">Sport</Link>
        
        <Link href="mailto:20tjohnton@fulhamboysschool.org.uk" className="right no-mobile" title="Contact">Contact</Link>

      </navbar>

    </>
  );
}

export default Nav;
