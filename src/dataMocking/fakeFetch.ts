const fakeFetch = (rawData: any) => {
  console.log("---- executing fake fetch -----");
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve(rawData);
    }, 1000);
  });
};

export default fakeFetch;
