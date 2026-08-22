export function shouldRetryChannelNotification(statusCode: number, attempt: number, maxAttempts: number = 3): boolean {
  if (attempt >= maxAttempts) return false;
  return statusCode === 429 || statusCode >= 500;
}
