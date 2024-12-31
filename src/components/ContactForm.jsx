import React from 'react';

    function ContactForm() {
      return (
        <div>
          <h3>Contact Information</h3>
          <div className="form-group">
            <label>Name *</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Title *</label>
            <input type="text" name="title" required />
          </div>
          <div className="form-group">
            <label>Company *</label>
            <input type="text" name="company" required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" />
          </div>
          <div className="form-group">
            <label>Photo URL</label>
            <input type="url" name="photo" />
          </div>
          <div className="form-group">
            <label>Logo URL</label>
            <input type="url" name="logo" />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input type="url" name="website" />
          </div>
        </div>
      );
    }

    export default ContactForm;
