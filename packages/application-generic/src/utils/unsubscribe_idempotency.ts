export function isAlreadyUnsubscribed(existingTopicKeys: string[], targetTopicKey: string): boolean {
  return !existingTopicKeys.includes(targetTopicKey);
}
