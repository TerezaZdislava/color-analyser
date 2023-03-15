import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Contrast({ errors, formData, setFormData, img }) {
  const contrastChange = (event) => {
    setFormData({
      ...formData,
      contrast: event.target.value,
    });
  };
  return (
    <form className="question">
      {errors && <span className="error">Required *</span>}
      <h3>Determine the contrast between your features.</h3>
      <div className="info">
        <span className="element">
          <span className="highlight">Low contrast:</span> All features are
          equally light.
        </span>
        <span className="element">
          <span className="highlight">High contrast:</span> prominent dark hair
          and eyes, which stand in contrast to lighter skin.
        </span>
        <span className="element">
          <span className="highlight">Medium contrast:</span> your features are
          neither light nor prominently dark.
        </span>
      </div>

      <div className="image-box">
        <img src={img} alt={img} style={{ filter: 'grayscale(1)' }} />
      </div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue={formData.contrast}
        value={formData.contrast}
        onChange={contrastChange}
      >
        <FormControlLabel
          value={'low'}
          control={<Radio color="secondary" />}
          label={'Low'}
        />
        <FormControlLabel
          value={'medium'}
          control={<Radio color="secondary" />}
          label={'Medium'}
        />
        <FormControlLabel
          value={'high'}
          control={<Radio color="secondary" />}
          label={'High'}
        />
      </RadioGroup>
    </form>
  );
}

export default Contrast;
