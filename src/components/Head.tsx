import React from "react";
import { Helmet } from "react-helmet";

/**
 * Interface used on Head component params
 */
interface Props {
  title: string;
}

const Head: React.FC<Props> = ({ title }) => {
  const defaultTitle = "⚛️ app";

  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export { Head };
