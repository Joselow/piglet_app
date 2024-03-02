export const processData = (obj) => {
  const processedData = {...obj}
  for (let key in processedData) {
    if (!processedData[key]) {
      delete processedData[key]
    }
  }
  return processedData
}


export function formatValidationErrors(errors) {
  return errors.map(error => `The field '${error.path.join('.')}' : ${error.message}`);
}