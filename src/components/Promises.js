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
    const timer = setInterval(() => {}, 1000);
    getAsycData();

    return () => {
      window.clearInterval(timer);
    };
  });

  return null;
};

export default Promises;
