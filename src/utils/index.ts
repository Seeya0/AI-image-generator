import { surpriseMePrompts } from '../constant';

export const getRandomPrompt = (prompt) => {
  const radomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[radomIndex];

  if (randomPrompt === prompt) {
    return getRandomPrompt(prompt);
  }

  return randomPrompt;
};
