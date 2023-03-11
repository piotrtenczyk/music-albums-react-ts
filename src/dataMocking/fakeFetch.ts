const fakeFetch = (rawData: any, resourceName: string) => {
  // console.log("---- executing fake fetch ----- for " + resourceName);
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve(rawData);
    }, 1000);
  });
};

export default fakeFetch;
