import Navbar from '#/components/Navbar';
import Footer from '#/components/Footer';
import Link from 'next/link';

const RequestRide = () => {
  return (
    <div className="react-container">
      <div className="content frontend">
        <Navbar />
        <h1 className="page-title-no-logo" id="request-ride">
          Ride Request & Reimbursement Form
        </h1>
        <h2 className="description">
          Cafe Maddy Cab is currently no longer provide vouchers. This is until
          we secure further funding. Thank you for your patience and your
          continued support. Keep a lookout on our{' '}
          <a
            href={'https://www.instagram.com/cafemaddycab/'}
            style={{ fontWeight: 600 }}
          >
            Instagram
          </a>{' '}
          page for more information.
        </h2>

        <div className="info-box no-title">
          Our submission form is currently closed. If you have any questions,
          please refer to our <Link href={'/faq'}>FAQ</Link> page.
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default RequestRide;
