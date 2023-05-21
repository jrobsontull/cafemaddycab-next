import Link from 'next/link';

import Navbar from '#/components/Navbar';
import Logo from '#/components/Logo';
import Footer from '#/components/Footer';

const Press = () => {
  return (
    <div className="react-container">
      <div className="content frontend">
        <Navbar />
        <Logo />

        <h2 className="info-box-heading">Press</h2>

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

          <Link href={'/press/4'} className="press-thumb">
            <img
              className="thumb"
              src={'/pressphotos/entry-4.webp'}
              alt="Entry 4"
            />
            <p className="author">NPR</p>
            <h3 className="title">
              &apos;A Sigh Of Relief&apos;: Crowdfunded Cab Rides Aim To Get
              Asian Americans Home Safe
            </h3>
          </Link>

          <Link href={'/press/3'} className="press-thumb">
            <img
              className="thumb"
              src={'/pressphotos/entry-3.webp'}
              alt="Entry 3"
            />
            <p className="author">COMPLEX</p>
            <h3 className="title">
              Brooklyn Woman Raises Over $100,000 to Provide Free Cab Rides for
              Asian Americans
            </h3>
          </Link>

          <Link href={'/press/2'} className="press-thumb">
            <img
              className="thumb"
              src={'/pressphotos/entry-2.jpeg'}
              alt="Entry 2"
            />
            <p className="author">ABCNEWS</p>
            <h3 className="title">
              Woman raises over $100k in 2 days to pay for Asian Americans&apos;
              taxi rides amid rise in hate crimes
            </h3>
          </Link>

          <Link href={'/press/1'} className="press-thumb">
            <img
              className="thumb"
              src={'/pressphotos/entry-1.png'}
              alt="Entry 1"
            />
            <p className="author">FOX5 NY</p>
            <h3 className="title">
              Brooklyn woman pays for cab rides for Asian New Yorkers
            </h3>
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Press;
