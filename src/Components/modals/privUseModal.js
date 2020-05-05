import { useState } from 'react';

const PrivUseModal = () => {
  const [isAppear, setIsAppear] = useState(false);

  function tog() {
    setIsAppear(!isAppear);
  }

  return {
    isAppear,
    tog,
  }
};

export default PrivUseModal;