import React from 'react';

    function PreviewSection() {
      return (
        <div id="preview" className="preview" style={{ display: 'none' }}>
          <h3>Embed Code</h3>
          <code id="embedCode"></code>
          <button onClick={copyEmbedCode} className="copy-button">Copy Code</button>
          
          <h3>Preview URL</h3>
          <code id="previewUrl"></code>
          <button onClick={copyPreviewUrl} className="copy-button">Copy URL</button>
        </div>
      );
    }

    function copyEmbedCode() {
      const code = document.getElementById('embedCode').textContent;
      navigator.clipboard.writeText(code)
        .then(() => alert('Embed code copied to clipboard!'))
        .catch(err => console.error('Copy failed:', err));
    }

    function copyPreviewUrl() {
      const url = document.getElementById('previewUrl').textContent;
      navigator.clipboard.writeText(url)
        .then(() => alert('Preview URL copied to clipboard!'))
        .catch(err => console.error('Copy failed:', err));
    }

    export default PreviewSection;
