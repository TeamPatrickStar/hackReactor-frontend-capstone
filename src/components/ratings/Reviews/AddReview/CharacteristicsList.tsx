// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Box } from '@mui/material'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/joy';
import characteristics from './Characteristics';
import { useState } from 'react'

const CharacteristicsList = ({ productRatings, selectedValues, setSelectedValues, setFormData, formData }) => {

  const handleChange = (event, char) => {
    setFormData({
      ...formData,
      characteristics: {
        ...(formData.characteristics || {}),
        [productRatings.characteristics[char].id]: Number(event.target.value)}
    })
    setSelectedValues({ ...selectedValues, [productRatings.characteristics[char].id]: Number(event.target.value)});
  };

  return (
    <>
      {Object.keys(productRatings.characteristics).map((char, index) => (
        <Box key={index}>
          <FormLabel>{char}:</FormLabel>
            <RadioGroup
            onChange={(event) => handleChange(event, char)}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'end',
              maxWidth: "670px"
            }}
          >
            {Object.entries(characteristics[char]).map((descriptor, index) => (
              <FormControlLabel
                key={index}
                value={descriptor[0]}
                control={<Radio />}
                label={
                  index === 0 || index === 4 ? (
                    <Typography textColor="#25252D" level="body3">
                      {descriptor[1]}
                    </Typography>
                  ) : ("")
                }
                labelPlacement="top"
              />
            ))}
          </RadioGroup>
        </Box>
      ))}
    </>
  );
            }

export default CharacteristicsList;