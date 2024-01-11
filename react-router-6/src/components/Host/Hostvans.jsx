import React, { useEffect, useState } from "react";
import styles from "./Host.module.css";
import { Link, useLoaderData } from "react-router-dom";
import { getData } from "../api";


export function loader() {
  return getData();
}


export default function Hostvans() {
  /* const [vans, setVans] = useState([]); */
  const [loading, setLoading] = useState(false);

  const vans = useLoaderData()

  

/*   useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      const data = await getData();
      setTimeout(() => {
        setVans(data);
        setLoading(false);
      }, 1000);
    };
    fetchdata();
  }, []); */

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ margin: "10px" }}>
      <h2>Your Listed Vans </h2>
      <div >
        {vans.map((each) => (
          <Link to={`${each.id}`} key={each.id} className={styles.miniCard}>
            <img className={styles.image} src={each.image} alt={each.title} />
            <div className={styles.miniCardSecond}>
              <h3>{each.title}</h3>
              <p>{each.price}$</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


