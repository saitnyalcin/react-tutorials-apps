import { useEffect } from 'react';

const Promises = () => {
  function resolveAfter3Secs() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 3000);
    });
  }

  async function getAsycData() {
    const result = await resolveAfter3Secs();
    console.log(result);
  }

  useEffect(() => {
    let enable = true;
    const timer = setInterval(() => {
      if (enable) {
        getAsycData();
        enable = false;
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return null;
};

export default Promises;
