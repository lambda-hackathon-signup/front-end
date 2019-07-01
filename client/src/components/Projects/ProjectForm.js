import React from "react";
import "styled-components/macro";
import { Flex, Heading, Text, Button } from "rebass";
import useProjectFrom from "../Hooks/CustomHooks";
const ProjectForm = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading fontSize={[3, 4, 5]}>Add a Project</Heading>
      <form>
        <div>
          <label
            htmlFor="project-title"
            css={`
              display: block;
            `}
          >
            Project Title
          </label>
          <input
            css={`
              display: block;
            `}
            id="project-title"
            name="project-title"
            type="text"
          />
        </div>
        <div>
          <label
            css={`
              display: block;
            `}
            htmlFor="project-description"
          >
            Project Description
          </label>
          <textarea name="project-description" id="project-description" />
        </div>
        <div>
          <Button type="submit">Add Project</Button>
        </div>
      </form>
    </Flex>
  );
};

export default ProjectForm;
