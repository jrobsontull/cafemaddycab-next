'use client';

import { usePathname } from 'next/navigation';
import { MouseEvent } from 'react';

const Footer = () => {
  const pathname = usePathname();

  const shareData = {
    title: 'Cafe Maddy Cab',
    text: 'Check out Cafe Maddy Cab',
    url: 'https://cafemaddycab.org' + pathname,
  };

  const displayCopyTooltip = (target: Element) => {
    if (target.parentNode?.parentNode?.childNodes[1].childNodes[0]) {
      const tooltip = target.parentNode.parentNode.childNodes[1]
        .childNodes[0] as HTMLElement;
      tooltip.classList.remove('hide');
      tooltip.style.visibility = 'visible';
      setTimeout(function () {
        tooltip.classList.add('hide');
      }, 2000);
    }
  };

  const shareAsync = async (e: MouseEvent) => {
    if (navigator.share) {
      // Navigator share feature
      await navigator.share(shareData);
    } else if (navigator.clipboard) {
      // Copy link to clipboard
      await navigator.clipboard.writeText(shareData.url);
      displayCopyTooltip(e.target);
    } else {
      // Browser is not compatible with Navigator API
      window.prompt(
        'Copy to your clipboard by highlighting the text and press Copy or Ctrl+C',
        shareData.url
      );
    }
  };
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://www.instagram.com/cafemaddycab/">
            <img src={'/insta_icon.svg'} alt="Instagram" />
            <p>@cafemaddycab</p>
          </a>
        </li>
        <li>
          <div className="share-btn" onClick={(e) => shareAsync(e)}>
            <img src={'/share_icon.svg'} alt="Share" />
            <p>Share</p>
          </div>
          <div className="tooltip">
            <div className="tooltip-text">
              Link to page copied to clipboard!
            </div>
          </div>
        </li>
      </ul>
      <p>
        All donations are a tax-deductible contribution to Cafe Maddy Cab. Cafe
        Maddy Cab is fiscally sponsored by APCF, a tax-exempt 501(c)(3) public
        charity; EIN: 95-4257997
      </p>
    </div>
  );
};

export default Footer;
