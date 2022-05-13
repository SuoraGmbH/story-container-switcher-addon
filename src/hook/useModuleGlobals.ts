import { useGlobals } from "@storybook/api";

type StoryContextSwitcherGlobals = {
  currentStoryContainerId: undefined | string;
};

export const useModuleGlobals = (): [
  StoryContextSwitcherGlobals,
  (globals: StoryContextSwitcherGlobals) => void
] => {
  const [{ storyContainerAddon }, updateGlobals] = useGlobals();

  return [
    storyContainerAddon ?? { currentStoryContainerId: undefined },
    (globals) => updateGlobals({ storyContainerAddon: globals }),
  ];
};
