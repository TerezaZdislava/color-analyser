import { useState } from 'react';
import StepperWrapper from './StepperWrapper';
import PinkOrangeTest from './questions/PinkOrangeTest';
import MetalTest from './questions/MetalTest';
import Contrast from './questions/Contrast';
import Contrast2 from './questions/Contrast2';
import Features from './questions/Features';
import '../styles/form.scss';

export const DefaultFormDataInt = {
  // tanTest: 'tan' | 'burn',
  // contrastTest
  pinkOrangeTest: '',
  metalTest: '',
  // rgbTest: '',
  contrast: null,
  contrast2: null,
  featuresContrast: '',
  // pokud studeny typ
  //--- podle vysledku svetle ruzova x fuchsia
  //--- cerna x seda sick/wash out
  // pokud teply tak
  // ---hneda x coral
  // --nude pink x nude brown
};

// SPRING
// warm + light  →  bright
// ‍SUMMER
// cool + light  →  muted
// AUTUMN
// warm + dark  →  muted‍
// WINTER
// cool + dark  →  bright

function Form({ img }) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState(false);
  const [hue, setHue] = useState('');
  const [contrast, setContrast] = useState('');
  const [croma, setCroma] = useState('');
  const [formData, setFormData] = useState(DefaultFormDataInt);

  function colors() {
    if (formData.pinkOrangeTest === 'cool' && formData.metalTest === 'cool') {
      return {
        muted: ['#f8bbd0', 'darkgrey'],
        bright: ['#d81b60', 'black'],
      };
    } else
      return {
        muted: ['brown', 'darkolivegreen'],
        bright: ['coral', 'limegreen'],
      };
  }

  function validate() {
    switch (step) {
      case 1:
        if (formData.pinkOrangeTest !== '') {
          return true;
        }
        return false;
      case 2:
        if (formData.metalTest !== '') {
          return true;
        }
        return false;
      case 3:
        if (formData.featuresContrast !== '') {
          return true;
        }
        return false;
      case 4:
        if (formData.contrast !== null) {
          return true;
        }
        return false;
      case 5:
        if (formData.contrast2 !== null) {
          return true;
        }
        return false;

      default:
        return false;
    }
  }

  const view = () => {
    switch (step) {
      case 1:
        return (
          <PinkOrangeTest
            errors={errors}
            formData={formData}
            setFormData={setFormData}
            img={img}
          />
        );
      case 2:
        return (
          <MetalTest
            errors={errors}
            formData={formData}
            setFormData={setFormData}
            img={img}
          />
        );
      case 3:
        return (
          <Features
            errors={errors}
            formData={formData}
            setFormData={setFormData}
            img={img}
          />
        );
      case 4:
        return (
          <Contrast
            errors={errors}
            formData={formData}
            setFormData={setFormData}
            img={img}
            colors={colors()}
          />
        );
      case 5:
        return (
          <Contrast2
            errors={errors}
            formData={formData}
            setFormData={setFormData}
            img={img}
            colors={colors()}
          />
        );
      default:
        return <></>;
    }
  };

  function handleSubmit() {
    if (validate()) {
      setErrors(false);
      setStep(step + 1);
    } else {
      setErrors(true);
    }
    if (step === 4) {
      console.log(formData);
    }
  }

  function handleBack() {
    setStep(step - 1);
    setErrors(false);
  }

  return (
    <div className="formContainer">
      <StepperWrapper step={step} />
      {view()}
      <div className="buttons">
        {step > 1 && (
          <button className="button-secondary back" onClick={handleBack}>
            Back
          </button>
        )}
        <button className="button-primary" onClick={handleSubmit}>
          {step < 5 ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
    // <div>{img ? <img src={img} alt="img" /> : null}</div>
  );
}

export default Form;
