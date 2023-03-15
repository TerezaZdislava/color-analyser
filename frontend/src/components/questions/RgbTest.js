import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function RgbTest({ errors, formData, setFormData, img }) {
  const rgbTestChange = (event) => {
    setFormData({
      ...formData,
      rgbTest: event.target.value,
    });
  };
  return (
    <form className="question">
      {errors && <span className="error">Required *</span>}
      <h3>In which color you look best?</h3>
      <div className="image-box">
        <img src={img} alt={img} style={{ backgroundColor: 'blue' }} />
        <img src={img} alt={img} style={{ backgroundColor: 'red' }} />
        <img src={img} alt={img} style={{ backgroundColor: 'yellow' }} />
      </div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue={formData.rgbTest}
        value={formData.rgbTest}
        onChange={rgbTestChange}
      >
        <FormControlLabel
          value={'cool'}
          control={<Radio color="secondary" />}
          label={'Blue'}
        />
        <FormControlLabel
          value={'medium'}
          control={<Radio color="secondary" />}
          label={'Red'}
        />
        <FormControlLabel
          value={'warm'}
          control={<Radio color="secondary" />}
          label={'Yellow'}
        />
      </RadioGroup>
    </form>
  );
}

export default RgbTest;
