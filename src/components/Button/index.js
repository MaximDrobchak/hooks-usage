import React from 'react';
import { Button } from '@material-ui/core';

export default ({ onClick, children }) =>
<Button onClick={onClick} variant="contained" color="primary">
  {children}
</Button>