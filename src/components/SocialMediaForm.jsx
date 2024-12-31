import React from 'react';

    function SocialMediaForm() {
      return (
        <div>
          <h3>Social Media Links</h3>
          <div className="form-group">
            <label>Instagram URL</label>
            <input type="url" name="instagram" placeholder="https://instagram.com/username" />
          </div>
          <div className="form-group">
            <label>Facebook URL</label>
            <input type="url" name="facebook" placeholder="https://facebook.com/username" />
          </div>
          <div className="form-group">
            <label>LinkedIn URL</label>
            <input type="url" name="linkedin" placeholder="https://linkedin.com/in/username" />
          </div>
        </div>
      );
    }

    export default SocialMediaForm;
