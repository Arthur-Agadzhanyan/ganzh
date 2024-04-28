"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ServiceList } from "./ServiceList";
import ServiceCard from "./ServiceList/ServiceCard";
import { supabase } from "../layout";
import Loader from "../_components/Loader";

interface Props {}

function MainPage(props: Props) {
  const [tariffs, setTariffs] = useState<ServiceListData[]>([]);

  useLayoutEffect(() => {
    async function getTariffs() {
      const { data, error } = await supabase.from("tariffs").select();
      console.log(data && data[0].cardList);
      setTariffs(data as ServiceListData[]);
    }
    getTariffs();
  }, []);

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.main__title}>Ganzh_mua</h1>
        <h3 className={styles.main__subtitle}>
          Приветствую на своём сайте!
          <br /> Здесь вы можете ознакомиться с блоками обучения
        </h3>

        {!tariffs.length && <Loader />}

        {!!tariffs.length &&
          tariffs?.map((item) => (
            <ServiceList key={item.title} {...item}>
              {item?.cardList?.map((card) => (
                <ServiceCard key={card.title} {...card} />
              ))}
            </ServiceList>
          ))}
      </div>
    </>
  );
}

export default MainPage;
