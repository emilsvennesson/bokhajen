import { Typography, Box } from '@mui/material';
import React from 'react';

interface IInformationTextLineProps {
  children: string;
  label?: string;
  fontSize?: number;
  labelBold?: boolean;
  textBold?: boolean;
}

/**
 * This is a component that shows a label before some text, this is usaed when you want to display a short line of text that has a sertain meaning. The meaning of the line is specified by the label
 * @param children This is the text that will be shown after the label and should be a string
 * @param label? this is the label that will be shwon before the text
 * @param fontSize? this will set the
 * @param labelBold? if true the label will be shown as bold
 * @param textBold? if true the text will be shown as bold
 * @returns InformationTextLine component
 */
export default function InformationTextLine({
  children,
  label = '',
  fontSize = 17,
  labelBold = false,
  textBold = false,
}: IInformationTextLineProps) {
  /**
   * This formatts the label so that it will be displayed correctly
   * @param text the label that will be formatted
   * @returns a specified Typography JSX element
   */
  function formatLabel(text: String): JSX.Element {
    if (text.length === 0) return <Typography />;

    if (labelBold) {
      return (
        <Typography
          fontSize={fontSize}
          fontWeight="bold"
          marginRight={1}
          noWrap
        >
          {text}
        </Typography>
      );
    }
    return (
      <Typography fontSize={fontSize} marginRight={1} flexShrink={5} noWrap>
        {text}
      </Typography>
    );
  }

  /**
   * This formatts the text so that it will be displayed correctly
   * @param text the text that will be formatted
   * @returns a specified Typography JSX element
   */
  function formatText(text: String): JSX.Element {
    if (textBold) {
      return (
        <Typography
          fontSize={fontSize}
          fontWeight="bold"
          width="350px"
          paragraph
          flexShrink={5}
        >
          {text}
        </Typography>
      );
    }

    return <Typography fontSize={fontSize}>{text}</Typography>;
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      marginLeft={1}
      minWidth="200px"
      flexWrap="wrap"
    >
      <Box flexShrink={2}>{formatLabel(label)}</Box>
      <Box flexGrow={4} display="flex" justifyContent="left">
        {formatText(children)}
      </Box>
    </Box>
  );
}
