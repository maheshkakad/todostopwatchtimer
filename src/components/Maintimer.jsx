import React from 'react';
import Timer from './Timer';

const Maintimer = () => {
  return (
    <div>
      <Timer initTime={0} endTime={20} />
    </div>
  );
}

export default Maintimer;