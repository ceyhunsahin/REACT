import React from "react";
import { useState, useEffect } from "react";
import styles from "./Vans.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useSearchParams, useLoaderData} from "react-router-dom";
import { getData } from "../api";

export function loader() {
    return getData()

}


export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();

/*   const [products, setProducts] = useState([]); */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
/*   useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const data = await getData();

        setProducts(data);
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }
    fetchData();
  }, []); */

  const vans = useLoaderData();

  console.log(vans)
  

  const typeFilter = searchParams.get("search")
  console.log("typeFilter", typeFilter);

  const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans


  const vanElements = displayedVans.map(van => (
          <div key={van.id} className={styles.products}>
              <Link
                  to={`${van.id}`}
                  state={{
                      search: `?${searchParams.toString()}`,
                      type: typeFilter
                  }}
              >
                  <img alt={van.name} src={van.imageUrl} />
                  <div className="van-info">
                      <h3>{van.name}</h3>
                      <p>${van.price}<span>/day</span></p>
                  </div>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
              </Link>
          </div>
      ))

  /* const typeFilter = searchParams.toString(); */

  

/*   const filteredProducts = products.filter(
    (product) =>
      product.category
        .toLowerCase()
        .includes(typeFilter && typeFilter.toLowerCase()) ||
      product.title
        .toLowerCase()
        .includes(typeFilter && typeFilter.toLowerCase())
  ); */

/*   for (const [key, value] of Object.entries(filteredProducts)) {
    console.log(value.title);
  } */

  function genNewSearchParamString(key, value) {
    /* const newSearchParams = new URLSearchParams(window.location.search);
            newSearchParams.set(key, value);
            return newSearchParams.toString(); */
    console.log("searchParams", searchParams);
    const newSearchParams = new URLSearchParams(searchParams);
    console.log("newSearchParams", newSearchParams);
    if (value === null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, value);
    }
    return `?${newSearchParams.toString()}`;
  }

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
        console.log("searchParamsssss", searchParams);
      }
      return `?${prevParams.toString()}`;
    });
  };

/*   if (loading) {
    return <h1>Loading...</h1>;
  } */

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.products}>
      <div>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-lg-2"
                onChange={(e) =>
                  setSearchParams({ ...searchParams, search: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm="auto">
              <Link to={genNewSearchParamString("search", "simple")}>
                Simple
              </Link>
            </Col>
            <Col sm="auto">
              <Link to="?search=rugged">Rugged</Link>
            </Col>
            <Col sm="auto">
              <Link to="?search=luxury">Luxury</Link>
            </Col>
            <Col sm="auto">
              <Link to=".">Clear Filter</Link>
            </Col>
          </Row>
        </Form>
        <Button
          variant="primary"
          onClick={() => setSearchParams({ search: "simple" })}
        >
          Simple
        </Button>{" "}
        <Button
          variant="warning"
          onClick={() => handleFilterChange("search", "rugged")}
        >
          Rugged
        </Button>{" "}
        <Button
          variant="info"
          onClick={() => setSearchParams({ search: "luxury" })}
        >
          Luxury
        </Button>{" "}
      </div>

      <div className={styles.products}>
        {typeFilter ?? vans.map((each) => (
              <Link
                to={`${each.id}`}
                key={each.id}
                className={styles.product}
              >
                <h6>{each.type}</h6>
                <img
                  className={styles.image}
                  src={each.imageUrl}
                  alt={each.name}
                />
                <p>{each.price}$</p>
              </Link>
            ))}
      </div>
      <div className={styles.products}>
      {typeFilter &&
                vanElements}
            </div>

    </div>
  );
}
