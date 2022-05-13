import type { DecoratorFunction } from "@storybook/addons";
import React from "react";
import { allStoryContainersId, StoryContainerConfiguration } from "./Tool";
import { PARAM_KEY } from "./constants";
import {
  useModuleGlobals,
  useModuleGlobalsInDecorator,
} from "./hook/useModuleGlobals";

export const storyContainerDecorator: DecoratorFunction = (
  StoryFn,
  context
) => {
  const [storyContainerAddon] = useModuleGlobalsInDecorator();
  const { parameters } = context;
  const storyContainers = parameters[
    PARAM_KEY
  ] as StoryContainerConfiguration[];

  if (!storyContainerAddon?.currentStoryContainerId) {
    console.log("storyContainerAddon.currentStoryContainerId is undefined");
    return StoryFn();
  }

  const { currentStoryContainerId } = storyContainerAddon;

  if (!storyContainers) {
    console.log("storyContainers is undefined");
    return StoryFn();
  }

  console.log({ currentStoryContainerId });

  if (currentStoryContainerId === allStoryContainersId) {
    const containerWrappedStories = storyContainers.map(
      (container: StoryContainerConfiguration) => {
        const Decorator = container.container;
        return <Decorator key={container.id}>{StoryFn()}</Decorator>;
      }
    );
    console.log({ containerWrappedStories });

    return <>{containerWrappedStories}</>;
  }

  const currentStoryContainer = storyContainers.find(
    (c: StoryContainerConfiguration) => c.id === currentStoryContainerId
  );

  if (!currentStoryContainer) {
    return StoryFn();
  }

  const Decorator = currentStoryContainer.container;

  return <Decorator>{StoryFn()}</Decorator>;
};
