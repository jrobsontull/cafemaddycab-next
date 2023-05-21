// Module imports
import Link from 'next/link';

// Component imports
import Navbar from '#/components/Navbar';
import Footer from '#/components/Footer';
import Logo from '#/components/Logo';

function LandingPage() {
  return (
    <div className="react-container">
      <div className="content frontend landing-page">
        <Navbar />
        <Logo />

        <div className="big-btns">
          <div className="btn-link" id="landing-page">
            <Link href={'/request-ride'}>
              <img src={'/taxi_icon_white.svg'} alt="Taxi" className="icon" />
              <div className="text">Request a Ride</div>
            </Link>
          </div>
          <div className="btn-link" id="landing-page">
            <a
              href="https://www.gofundme.com/f/cafemaddycab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={'/donate_icon_white.svg'}
                alt="Donate"
                className="icon"
              />
              <div className="text">Donate</div>
            </a>
          </div>
        </div>

        <div className="picture-block" id="landing-1">
          <img
            src={'/landing-page-1.webp'}
            className="picture-head"
            alt="landing-1"
          />
          <h2 className="title">Introducing Cafe Maddy Cab</h2>
          <p className="description">
            We provide cab rides for the vulnerable Asian minority population in
            NYC, specifically those at risk of hate crimes.
          </p>
        </div>

        <div className="btn-link" id="landing-page">
          <Link href={'/how-to-ride'}>
            <img src={'/info_icon_white.svg'} alt="Info" className="icon" />
            <div className="text">How it works</div>
          </Link>
        </div>

        <div className="picture-block" id="landing-2">
          <img
            src={'/landing-page-2.webp'}
            className="picture-head"
            alt="landing-2"
          />
          <h2 className="title">Our mission</h2>
          <p className="description">
            At Cafe Maddy Cab, our mission is to help the AAPI community feel
            safe in their commute. We hope to instill a strength and kindness
            that echoes louder than the fear and violence that&apos;s taken over
            NYC.
          </p>
        </div>

        <div className="uber">
          <div className="icons">
            <img src={'/logo.svg'} alt="CMCLogo" className="cmc-icon" />
            <h1>X</h1>
            <img src={'/uber_logo.svg'} alt="Uber" className="uber-icon" />
          </div>
          <h2 className="info-box-heading">
            Thank you Uber for partnering with us and donating!
          </h2>
        </div>

        <div className="btn-link inverted" id="landing-page">
          <a
            href="https://www.gofundme.com/f/cafemaddycab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={'/donate_icon_blue.svg'} alt="Donate" className="icon" />
            <div className="text">Donate</div>
          </a>
        </div>

        <div className="quote-block">
          <img
            className="quote-img"
            src={'/landing-quote.webp'}
            alt="Madeline Park"
          />
          <h3 className="quote-text">
            &quot;Every time I see it, I can&apos;t help but think, that could
            have been me.&quot;
          </h3>
          <p className="author">Madeline Park, Founder</p>
        </div>

        <h2 className="info-box-heading">Why we&apos;re here</h2>
        <div className="info-box no-title" id="why">
          <p>
            &quot;It&apos;s really terrifying. Every time I see it, I can&apos;t
            help but think that, that could&apos;ve been me&quot; says Madeline
            Park, the founder of Cafe Maddy Cab.
          </p>
          <p>
            If you&apos;re an Asian living in this city, we&apos;ve all felt the
            same way—seeing all the news and headlines about the anti-Asian hate
            crimes, we feel fearful to ride the subway. So Maddy, aka @cafemaddy
            founded Cafe Maddy Cab to make cab rides accessible to those who are
            in need, but for people who can&apos;t afford it.
          </p>
          <p>
            From April 2021 what began as a one person&apos;s effort to offer
            taxi rides became a widespread crowdfunded program, and with the
            total fundraised amount of more than $250,000, Cafe Maddy Cab paid
            for over <span>7800 essential rides</span> for Asian Women, LGBTQ,
            and Elderly folks of NYC. Cafe Maddy Cab service shut down last year
            after depleting the fund thinking it wouldn&apos;t be needed and the
            city felt safer. But with the recent rise in anti-Asian hate crimes
            in 2022, we felt the need to relaunch Cafe Maddy Cab.
          </p>
        </div>

        <div className="btn-link inverted" id="landing-page">
          <Link href={'/request-ride'}>
            <img src={'/taxi_icon_blue.svg'} alt="Taxi" className="icon" />
            <div className="text">Request a Ride</div>
          </Link>
        </div>

        <div className="info-box-heading-link" id="press-title">
          <Link href={'/press'}>
            <h2>Press</h2>
            <div className="arrow-point-right"></div>
          </Link>
        </div>

        <div className="entries">
          <Link href={'/press/8'} className="press-thumb">
            <img
              className="thumb"
              src={'/pressphotos/entry-8.webp'}
              alt="Entry 8"
            />
            <p className="author">CNBC</p>
            <h3 className="title">
              This fund will give money to Asian, elderly and LGBTQ people who
              need safe rides
            </h3>
          </Link>

          <Link href={'/press/7'} className="press-thumb">
            <img
              className="thumb"
              src={'/pressphotos/entry-7.jpeg'}
              alt="Entry 7"
            />
            <p className="author">NextShark</p>
            <h3 className="title">
              Cafe Maddy Cab: Program that pays cab fares for NYC AAPIs
              vulnerable to hate crimes relaunches
            </h3>
          </Link>

          <Link href={'/press/6'} className="press-thumb">
            <img
              className="thumb"
              src={'/pressphotos/entry-6.jpeg'}
              alt="Entry 6"
            />
            <p className="author">ELLE</p>
            <h3 className="title">
              How Crowdfunded Cabs Became A Beacon Of Hope In The Fight Against
              AAPI Violence
            </h3>
          </Link>
          <Link href={'/press/5'} className="press-thumb">
            <img
              className="thumb"
              src={'/pressphotos/entry-5.webp'}
              alt="Entry 5"
            />
            <p className="author">世界日報</p>
            <h3 className="title">
              快看世界／害怕坐紐約地鐵？亞裔搭出租車 她幫您報銷
            </h3>
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
