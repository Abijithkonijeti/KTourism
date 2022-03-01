import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";
const tours = [
  {
    id: 1,
    category: ["Tours"],
    img: imgCard1,
    alt: "blah blah",
    title: "Tours",
  },
  {
    id: 2,
    category: ["Bussiness Trips"],
    img: imgCard2,
    alt: "blah blah",
    title: "Bussiness Trips",
  },
  {
    id: 3,
    category: ["Holiday Vactions"],
    img: imgCard3,
    alt: "blah blah",
    title: "Holiday Vactions",
  },
  {
    id: 4,
    category: ["Holy Places"],
    img: imgCard4,
    alt: "blah blah",
    title: "Holy Places",
  }
];

const itemCategories = [
  "all",
  "Tours",
  "Bussiness Trips",
  "Holiday Vactions",
  "Holy Places"
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>K Tourism</h1>
            <p>A Great Collection of Tours & Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
