import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function PinkOrangeTest({ errors, formData, setFormData, img }) {
  const pinkOrangeTest = (event) => {
    setFormData({
      ...formData,
      pinkOrangeTest: event.target.value,
    });
  };
  return (
    <form className="question">
      {errors && <span className="error">Required *</span>}
      <h3>Do you look more fresh in pink or in orange?</h3>
      <div className="image-box">
        <img src={img} alt={img} style={{ backgroundColor: '#cf21cf' }} />
        <img src={img} alt={img} style={{ backgroundColor: 'darkorange' }} />
      </div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue={formData.pinkOrangeTest}
        value={formData.pinkOrangeTest}
        onChange={pinkOrangeTest}
      >
        <FormControlLabel
          value={'pink'}
          control={<Radio color="secondary" />}
          label={'Pink'}
        />
        <FormControlLabel
          value={'orange'}
          control={<Radio color="secondary" />}
          label={'Orange'}
        />
      </RadioGroup>
    </form>
  );
}

export default PinkOrangeTest;
