import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Contrast2({ errors, formData, setFormData, img, colors }) {
  const contrastChange = (event) => {
    setFormData({
      ...formData,
      contrast2: event.target.value,
    });
  };
  return (
    <form className="question">
      {errors && <span className="error">Required *</span>}
      <h3>
        {' '}
        Bright or muted, which color makes your features look more glowing and
        healthy?
      </h3>
      <div className="image-box">
        <img
          src={img}
          alt={img}
          style={{ backgroundColor: colors.bright[1] }}
        />
        <img src={img} alt={img} style={{ backgroundColor: colors.muted[1] }} />
      </div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue={formData.contrast2}
        value={formData.contrast2}
        onChange={contrastChange}
      >
        <FormControlLabel
          value={false}
          control={<Radio color="secondary" />}
          label={'muted'}
        />
        <FormControlLabel
          value={true}
          control={<Radio color="secondary" />}
          label={'bright'}
        />
      </RadioGroup>
    </form>
  );
}

export default Contrast2;
