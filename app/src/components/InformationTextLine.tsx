import { Typography, Box } from '@mui/material';
import React from 'react';

interface IInformationTextLineProps {
  children: String;
  label?: string;
  fontSize?: number;
}

/**
 * This is a component that shows a label before some text, this is usaed when you want to display a short line of text that has a sertain meaning. The meaning of the line is specified by the label
 * @param children This is the text that will be shown after the label and should be a string
 * @param label? this is the label that will be shwon before the text
 * @param fontSize? this will set the
 * @returns InformationTextLine component
 */
export default function InformationTextLine({
  children,
  label = '',
  fontSize,
}: IInformationTextLineProps) {
  function formatLabel(text: String): JSX.Element {
    if (text.length === 0) return <Typography />;

    return (
      <Typography fontSize={fontSize} marginRight={1}>
        {text}
      </Typography>
    );
  }
  return (
    <Box display="flex" flexDirection="row" marginLeft={1}>
      {formatLabel(label)}
      <Typography fontSize={fontSize} fontWeight="bold">
        {children}
      </Typography>
    </Box>
  );
}

InformationTextLine.defaultProps = {
  label: '',
  fontSize: 17,
};
