import React from 'react';
    import ContactForm from '../components/ContactForm';
    import SocialMediaForm from '../components/SocialMediaForm';
    import ColorForm from '../components/ColorForm';
    import PreviewSection from '../components/PreviewSection';

    function DataCollectionForm() {
      const generatePreview = (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const params = new URLSearchParams();
        
        for (const [key, value] of formData.entries()) {
          if (value) {
            params.append(key, value);
          }
        }
        
        const baseUrl = window.location.origin + '/business-card';
        const fullUrl = `${baseUrl}?${params.toString()}`;
        
        const embedCode = `<iframe 
          src="${fullUrl}"
          width="100%"
          height="600px"
          frameborder="0"
          style="border-radius: 12px; max-width: 400px;">
        </iframe>`;
        
        document.getElementById('embedCode').textContent = embedCode;
        document.getElementById('previewUrl').textContent = fullUrl;
        document.getElementById('preview').style.display = 'block';
      };

      return (
        <div className="config-form">
          <h2>Business Card Configuration</h2>
          
          <form id="cardConfig" onSubmit={generatePreview}>
            <ContactForm />
            <SocialMediaForm />
            <ColorForm />
            
            <button type="submit" className="button">Generate Embed Code</button>
          </form>
          
          <PreviewSection />
        </div>
      );
    }

    export default DataCollectionForm;
