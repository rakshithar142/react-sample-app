import axios from "axios";
import axiosRetry from "axios-retry";

export const axiosInstance = axios.create({
  timeout: 5000, // Set the timeout to 5 seconds (in milliseconds)
  headers: {
    "Content-Type": "application/json",
  },
});

axiosRetry(axios, {
  retries: 3,
  retryCondition: isErrorRetryable,
  retryDelay: axiosRetry.exponentialDelay,
});

function isErrorRetryable(error) {
  // Retry Network Errors.
  if (axiosRetry.isNetworkError(error)) {
    return true;
  }

  if (!error.response) {
    // Cannot determine if the request can be retried
    return false;
  }

  // Retry Server Errors (5xx).
  if (error.response.status >= 500 && error.response.status <= 599) {
    return true;
  }

  // Retry if rate limited.
  if (error.response.status === 429) {
    return true;
  }

  return false;
}
