import SectionHead from './SectionHead';
import { GiCutDiamond } from 'react-icons/gi';
import { values } from '../data';
import Card from '../UI/Card';
import Image from '../images/values.jpg';
import React from 'react';

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} tittle="Values" />
          <p>
                  Lorem ipsum dolor sit amet.
          </p>
          <div className="values__wrapper">
            {
              values.map(({ id, icon, tittle, desc }) => {
                return (
                  <Card  key={id} className="values__value">
                    <span> {icon}</span>
                    <h4>{tittle}</h4>
                    <small>{desc}</small>
                  </Card>
                );
              })
            }
          </div>
        </div>
      </div>

    </section>
  );
};

export default Values;