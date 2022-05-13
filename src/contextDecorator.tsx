import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import React from "react";
import { allContextsId, ContextConfiguration } from "./Tool";

export const contextDecorator: DecoratorFunction = (StoryFn, context) => {
  const [{ contextsAddon }] = useGlobals();
  const { parameters } = context;

  if (!contextsAddon?.currentContextId) {
    return StoryFn();
  }

  if (!parameters.contexts) {
    return StoryFn();
  }

  if (contextsAddon.currentContextId === allContextsId) {
    const contextWrappedStories = parameters.contexts.map(
      (context: ContextConfiguration) => {
        const Decorator = context.context;
        return <Decorator key={context.id}>{StoryFn()}</Decorator>;
      }
    );

    return <>{contextWrappedStories}</>;
  }

  const currentContext = parameters.contexts.find(
    (c: ContextConfiguration) => c.id === contextsAddon.currentContextId
  );

  const Decorator = currentContext.context;

  return <Decorator>{StoryFn()}</Decorator>;
};
