import React, { useCallback } from "react";
import { useGlobals, useParameter } from "@storybook/api";
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";
import { TOOL_ID } from "./constants";

export type StoryContainerConfiguration = {
  id: string;
  label: string;
  container: React.ComponentType;
};

export const allStoryContainersId = "___ALL___";

export const Tool = () => {
  const storyContainers = useParameter<StoryContainerConfiguration[]>(
    "storyContainers",
    []
  );
  const [{ storyContainerAddon }, updateGlobals] = useGlobals();
  const currentStoryContainerId = storyContainerAddon?.currentStoryContainerId;

  if (storyContainers.length === 0) {
    return null;
  }
  const active =
    currentStoryContainerId !== undefined &&
    Boolean(storyContainers.find(({ id }) => id === currentStoryContainerId));

  return (
    <>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        tooltip={({ onHide }) => {
          return (
            <TooltipLinkList
              links={[
                {
                  id: "none",
                  title: "None",
                  onClick: () => {
                    updateGlobals({
                      storyContainerAddon: {
                        currentStoryContainerId: undefined,
                      },
                    });
                    onHide();
                  },
                },
                ...storyContainers.map((storyContainer) => ({
                  id: storyContainer.id,
                  title: storyContainer.label,
                  onClick: () => {
                    console.log(storyContainer.id);
                    updateGlobals({
                      storyContainerAddon: {
                        currentStoryContainerId: storyContainer.id,
                      },
                    });
                    onHide();
                  },
                  active: storyContainer.id === currentStoryContainerId,
                })),
                {
                  id: allStoryContainersId,
                  title: "All",
                  onClick: () => {
                    updateGlobals({
                      storyContainerAddon: {
                        currentStoryContainerId: allStoryContainersId,
                      },
                    });
                    onHide();
                  },
                },
              ]}
            />
          );
        }}
      >
        <IconButton
          key="storyContainer"
          title="Change container that is wrapped around the story"
          active={active}
        >
          <Icons icon="box" />
        </IconButton>
      </WithTooltip>
    </>
  );
};
