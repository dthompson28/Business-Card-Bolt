import React from 'react';

    function ColorForm() {
      return (
        <div>
          <h3>Brand Colors</h3>
          <div className="color-inputs">
            <div className="form-group">
              <label>Primary Color</label>
              <div className="color-input-group">
                <input type="color" name="primary" defaultValue="#2563eb" />
                <input type="text" data-color-input="primary" defaultValue="#2563eb" />
              </div>
            </div>
            <div className="form-group">
              <label>Secondary Color</label>
              <div className="color-input-group">
                <input type="color" name="secondary" defaultValue="#666666" />
                <input type="text" data-color-input="secondary" defaultValue="#666666" />
              </div>
            </div>
            <div className="form-group">
              <label>Accent Color</label>
              <div className="color-input-group">
                <input type="color" name="accent" defaultValue="#333333" />
                <input type="text" data-color-input="accent" defaultValue="#333333" />
              </div>
            </div>
            <div className="form-group">
              <label>Background Color</label>
              <div className="color-input-group">
                <input type="color" name="background" defaultValue="#f5f5f5" />
                <input type="text" data-color-input="background" defaultValue="#f5f5f5" />
              </div>
            </div>
            <div className="form-group">
              <label>Highlight Color</label>
              <div className="color-input-group">
                <input type="color" name="highlight" defaultValue="#f3f4f6" />
                <input type="text" data-color-input="highlight" defaultValue="#f3f4f6" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default ColorForm;
