"use client"
import React, { useEffect } from 'react';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
    // @ts-ignore
} from 'react-simple-captcha';

const CaptchaTest: React.FC = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const doSubmit = () => {
    const userCaptcha = (document.getElementById('user_captcha_input') as HTMLInputElement).value;

    if (validateCaptcha(userCaptcha)) {
      alert('Captcha Matched');
      loadCaptchaEnginge(6);
      (document.getElementById('user_captcha_input') as HTMLInputElement).value = '';
    } else {
      alert('Captcha Does Not Match');
      (document.getElementById('user_captcha_input') as HTMLInputElement).value = '';
    }
  };

  return (
    <div>
      <div className="container">
        <div className="form-group">
          <div className="col mt-3">
            <LoadCanvasTemplate />
          </div>

          <div className="col mt-3">
            <input
              placeholder="Enter Captcha Value"
              id="user_captcha_input"
              name="user_captcha_input"
              type="text"
            />
          </div>

          <div className="col mt-3">
            <button className="btn btn-primary" onClick={doSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptchaTest;
