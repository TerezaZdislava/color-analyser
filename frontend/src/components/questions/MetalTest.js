import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function MetalTest({ errors, formData, setFormData, img }) {
  const metalTestChange = (event) => {
    setFormData({
      ...formData,
      metalTest: event.target.value,
    });
  };
  return (
    <form className="question">
      {errors && <span className="error">Required *</span>}
      <h3>Gold or silver, which looks better on you?</h3>
      <div className="image-box">
        <img src={img} alt={img} style={{ backgroundColor: 'goldenrod' }} />
        <img src={img} alt={img} style={{ backgroundColor: 'silver' }} />
      </div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue={formData.metalTest}
        value={formData.metalTest}
        onChange={metalTestChange}
      >
        <FormControlLabel
          value={'warm'}
          control={<Radio color="secondary" />}
          label={'Gold'}
        />
        <FormControlLabel
          value={'cool'}
          control={<Radio color="secondary" />}
          label={'Silver'}
        />
      </RadioGroup>
    </form>
  );
}

export default MetalTest;
