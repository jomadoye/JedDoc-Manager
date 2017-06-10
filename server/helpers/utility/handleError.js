/**
 * Handle promise errors
 *
 * @param {Object} error error object
 * @param {Function} res server response function
 * @returns {Function} function that displays an error message
 */
export default function handleError(error) {
  return error.errors ?
    error.errors[0].message :
    error.message;
}
