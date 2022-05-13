import { useGlobals } from "@storybook/api";
import { useGlobals as useGlobalsAddons } from "@storybook/addons";

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

export const useModuleGlobalsInDecorator = (): [
  StoryContextSwitcherGlobals,
  (globals: StoryContextSwitcherGlobals) => void
] => {
  const [{ storyContainerAddon }, updateGlobals] = useGlobalsAddons();

  return [
    storyContainerAddon ?? { currentStoryContainerId: undefined },
    (globals) => updateGlobals({ storyContainerAddon: globals }),
  ];
};
