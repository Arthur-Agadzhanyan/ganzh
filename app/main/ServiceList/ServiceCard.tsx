"use client";

import React, { useState } from "react";
import styles from "./service-card.module.scss";
import classNames from "classnames";
import { motion } from "framer-motion";
const ServiceInfo = ({
  descriptions = [],
  serviceList,
  courseTimeList,
  allCourseTime,
  coursePayment,
  coursePrePayment,
  allCourseDays,
}: CardData) => {
  const liCls = classNames(styles.card__text, styles.card__list_item);
  return (
    <motion.div
      animate={{
        opacity: [0, 0.5, 1],
      }}
    >
      <div className={styles.line} />
      <div className={styles.card__descriptions}>
        {Boolean(descriptions.length) &&
          descriptions.map((str) => <p key={str}>{str}</p>)}
      </div>

      <div className={styles.card__info_block}>
        <h4 className={styles.info_block__title}>{serviceList.title}</h4>
        <ul>
          {serviceList.list.map((item) => (
            <li key={item} className={liCls}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {courseTimeList && (
        <div className={styles.card__info_block}>
          <h4 className={styles.info_block__title}>
            {courseTimeList.title} {allCourseDays}
          </h4>
          {courseTimeList.list.length &&
            courseTimeList.list.map((item) => (
              <div
                key={item.dayTitle}
                className={styles.info_block__time_block}
              >
                <h5 className={styles.info_block__title}>{item.dayTitle}</h5>
                <ul style={{ margin: "0.5rem" }}>
                  {item.courseItems.map((courseListItem) => (
                    <li key={courseListItem}>{courseListItem}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}

      {allCourseTime && (
        <div className={styles.card__info_block}>
          <h4 className={styles.info_block__title}>
            Количество часов: {allCourseTime}
          </h4>
        </div>
      )}
      <div className={styles.card__info_block}>
        <h4 className={styles.info_block__title}>
          Стоимость обучения: {coursePayment} руб.
        </h4>
      </div>
      <div className={styles.card__info_block}>
        <h4 className={styles.info_block__title}>
          Предоплата: {coursePrePayment} руб.
        </h4>
      </div>
    </motion.div>
  );
};

function ServiceCard(props: CardData) {
  const { title, recommend } = props;

  const [openInfo, setOpenInfo] = useState(false);

  const toggleInfo = () => setOpenInfo((prev) => !prev);

  return (
    <div className={styles.card}>
      <h4 className={styles.card__title}>{title}</h4>
      {recommend && <p className={styles.card__subtitle}>{recommend}</p>}
      {openInfo && <ServiceInfo {...props} />}
      {openInfo ? (
        <button onClick={toggleInfo} className={styles.card__button}>
          Скрыть
        </button>
      ) : (
        <button
          onClick={toggleInfo}
          className={`${styles.card__button} ${styles.card__button_margin_disabled}`}
        >
          Подробнее
        </button>
      )}
    </div>
  );
}

export default ServiceCard;
