import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import React from "react";
import { ContextConfiguration } from "./Tool";

export const contextDecorator: DecoratorFunction = (StoryFn, context) => {
  const [{ contextsAddon }] = useGlobals();
  const { parameters } = context;

  if (!contextsAddon || !contextsAddon.currentContextId) {
    return StoryFn();
  }

  const currentContext = parameters.contexts.find(
    (c: ContextConfiguration) => c.id === contextsAddon.currentContextId
  );
  const Decorator = currentContext.context;

  console.log(contextsAddon.currentContextId, currentContext);

  return <Decorator>{StoryFn()}</Decorator>;
};
