import { Fragment } from "react";
import classNames from "classnames";

import classes from "./Breadcrumb.module.scss";

interface BreadcrumbItem {
  item: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className={classes.root}>
      {items.map((item, index) => (
        <Fragment key={index}>
          <span
            className={classNames({
              [classes.lastItem]: index === items.length - 1,
            })}
          >
            {item.link ? <a href={item.link}>{item.item}</a> : item.item}
          </span>
          {index < items.length - 1 && <span>{" > "}</span>}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
