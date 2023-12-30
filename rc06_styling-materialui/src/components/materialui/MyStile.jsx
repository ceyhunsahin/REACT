import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const CustomSlider = styled(Slider)({
  width: 500,
  color: 'var(--color)',
  '& .MuiSlider-thumb': {
    [`&:hover, &.Mui-focusVisible`]: {
      boxShadow: '0px 0px 0px 8px var(--box-shadow)',
    },
    [`&.Mui-active`]: {
      boxShadow: '0px 0px 0px 14px var(--box-shadow)',
    },
  },
});

const successVars = {
  '--color': '#124235',
  '--box-shadow': 'rgb(76, 175, 80, .16)',
};

const defaultVars = {
  '--color': '#12A34D',
  '--box-shadow': 'rgb(25, 118, 210, .16)',
};

export default function DynamicCSSVariables() {
  const [vars, setVars] = React.useState(defaultVars);

  const handleChange = (event) => {
    setVars(event.target.checked ? successVars : defaultVars);
  };

  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Switch
            checked={vars === successVars}
            onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Success"
      />
      <CustomSlider style={vars} defaultValue={50} sx={{
    width: 300,
    color: 'success.main',
    '& .MuiSlider-thumb': {
      borderRadius: '1px',
    }}} />
    </React.Fragment>
  );
}