import * as buttonStories from '../components/Button.stories';
import * as inputStories from '../components/forms/Input.stories';

export default function getStories() {
  const stories = [buttonStories, inputStories];

  return stories;
}
