import React from 'react';
import Ul, { MuiLink } from './styles';
import { Button } from '@material-ui/core';

const MenuItem = ({ name }) => (
  <li >
    <Button style={{ display: 'flex' }} >
      <MuiLink to={'/' + name} >{name}</MuiLink>
    </Button>
  </li>
);

export default ({ list }) => (
  <Ul>
    {(list || []).map(item =>
      <MenuItem name={item.name} key={item.id} />
    )}
  </Ul>
);
