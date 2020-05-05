const safeJsonResponse = response =>
  response.text().then(textResponse => {
    if (response.ok) {
      try {
        return JSON.parse(textResponse);
      } catch (err) {
        throw new Error(
          `Could not JSON parse reponse: ${textResponse}. Error: ${err}`
        );
      }
    } else {
      throw new Error(`HTTP error: ${response.status} - ${textResponse}`);
    }
  });

export default safeJsonResponse;
