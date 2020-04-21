import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const Head: React.FC<Props> = ({ title }) => {
  const defaultTitle = 'Welcome';

  return (
    <Helmet>
      <title>{title ? title : defaultTitle} - SmartSpaces</title>
    </Helmet>
  );
};

export { Head };
