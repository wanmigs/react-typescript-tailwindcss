import React from "react";
import { Head } from "components/Head";

/**
 * Interface used on WithTitle component params
 */
interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  component: React.FC<{}>;
  title: string;
}

const WithTitle: React.FC<Props> = ({
  component: Component,
  title,
  ...rest
}) => {
  return (
    <>
      <Head title={title} />
      <Component {...rest} />
    </>
  );
};

export default WithTitle;
