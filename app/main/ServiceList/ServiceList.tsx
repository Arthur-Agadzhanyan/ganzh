"use client"

import React, { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./service-list.module.scss";
import classNames from "classnames";

interface Props extends PropsWithChildren {
  title?: string;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export function ServiceList({ title, children, containerProps }: Props) {
  const cls = classNames(styles.container, containerProps?.className);
  return (
    <div {...containerProps} className={cls}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  );
}
