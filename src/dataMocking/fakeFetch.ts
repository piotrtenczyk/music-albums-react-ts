const fakeFetch = (rawData: any) => {
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve(rawData);
    }, 1000);
  });
};

export default fakeFetch;
