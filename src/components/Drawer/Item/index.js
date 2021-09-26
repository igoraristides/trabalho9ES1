import React from 'react';

import { Label, Button, IconSelected } from './styles';

function Item({ label, disabled, active, navigatePage, icon: Icon }) {
  return (
    <Button
      active={active}
      disabled={disabled}
      fullWidth
      onClick={navigatePage}
    >
      <IconSelected active={active}>
        <Icon fill="currentColor" style={{ height: '20px', width: '20px' }} />
      </IconSelected>

      <Label active={active}>{label}</Label>
    </Button>
  );
}

export default Item;
