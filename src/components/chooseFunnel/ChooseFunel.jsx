import React from 'react';
import classes from './ChooseFunnel.module.css';
import Aux from '../../Auxiliary/Auxiliary';

const chooseFunnel = (props) => (
  <Aux>
    <section className={`container ${classes.funnel__container}`}>
      <div className={classes.funnel__textBox}>
        <p className={classes.funnel__tag}>recomande</p>
        <p>
          laisser skywalker concvoir votre tunnel de vente{' '}
          <span className={classes.funnel__textUpper}>recomande</span>
        </p>

        <button className="btn btn-primary  btn-lg">Commencer</button>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.funnel__textBox}>
        <p>Creez un tunnel de vente vous meme!</p>
        <button className="btn btn-outline-secondary  btn-lg">Commencer</button>
      </div>
    </section>
  </Aux>
);

export default chooseFunnel;
