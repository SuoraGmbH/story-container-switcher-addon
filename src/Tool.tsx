import React, { useCallback } from "react";
import { useGlobals, useParameter } from "@storybook/api";
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";
import { TOOL_ID } from "./constants";

export type ContextConfiguration = {
  id: string;
  label: string;
  context: React.ComponentType;
};

export const allContextsId = "___ALL___";

export const Tool = () => {
  const contexts = useParameter<ContextConfiguration[]>("contexts", []);
  const [{ contextsAddon }, updateGlobals] = useGlobals();
  const currentContextId = contextsAddon?.currentContextId;
  // console.log({ contexts, contextsAddon });

  if (contexts.length === 0) {
    return null;
  }
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
                      contextsAddon: {
                        currentContextId: undefined,
                      },
                    });
                    onHide();
                  },
                },
                ...contexts.map((context) => ({
                  id: context.id,
                  title: context.label,
                  onClick: () => {
                    console.log(context.id);
                    updateGlobals({
                      contextsAddon: {
                        currentContextId: context.id,
                      },
                    });
                    onHide();
                  },
                  active: context.id === currentContextId,
                })),
                {
                  id: allContextsId,
                  title: "All",
                  onClick: () => {
                    updateGlobals({
                      contextsAddon: {
                        currentContextId: allContextsId,
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
          key="context"
          title="Change the context of the preview"
          active={currentContextId !== undefined}
        >
          <Icons icon="box" />
        </IconButton>
      </WithTooltip>
    </>
  );
};
