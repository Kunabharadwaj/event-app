import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className='topNav'>
        <Image
          alt="logo"
          src={"/images/logo_black.png"}
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a> Home</a>
              </Link>
            </li>
            <li>
              <Link href="/events" legacyBehavior>
                <a> Events</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us" legacyBehavior>
                <a> About-us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
    </header>
  );
};
