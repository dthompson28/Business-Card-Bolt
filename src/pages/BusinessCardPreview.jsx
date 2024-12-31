import React from 'react';
    import { useLocation } from 'react-router-dom';

    function BusinessCardPreview() {
      const { search } = useLocation();
      const params = new URLSearchParams(search);
      const tier = params.get('tier');
      const headerStyle = params.get('headerStyle');
      const premiumLinks = Array.from({ length: 3 }, (_, i) => ({
        title: params.get(`premiumLinkTitle${i}`),
        url: params.get(`premiumLinkUrl${i}`)
      })).filter(link => link.title && link.url);

      return (
        <div style={{ backgroundColor: params.get('backgroundColor') }}>
          <h1 style={{ color: params.get('primaryColor') }}>{params.get('firstName')} {params.get('lastName')}</h1>
          <h2 style={{ color: params.get('secondaryColor') }}>{params.get('jobTitle')} at {params.get('companyName')}</h2>
          <img src={params.get('photoUrl')} alt="Profile" />
          <img src={params.get('logoUrl')} alt="Logo" />
          <p>Phone: {params.get('phone')}</p>
          <p>Email: {params.get('email')}</p>
          <p>Address: {params.get('address')}</p>
          <a href={params.get('website')} target="_blank" rel="noopener noreferrer">Visit Website</a>
          <div>
            <a href={params.get('facebook')} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={params.get('instagram')} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={params.get('linkedin')} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          {tier === 'premium' && (
            <div>
              <h2>Premium Links</h2>
              {premiumLinks.map((link, index) => (
                <div key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                </div>
              ))}
            </div>
          )}
          <button onClick={() => alert('vCard download not implemented')}>Download vCard</button>
          <button onClick={() => alert('Share functionality not implemented')}>Share</button>
        </div>
      );
    }

    export default BusinessCardPreview;
