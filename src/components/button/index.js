import * as React from 'react';
import {Button} from '@material-ui/core';

const BasicButtons = (props) => {
  return (
      <Button {...props}>
        {props.children}
      </Button>
  );
}

export default BasicButtons