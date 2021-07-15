import React from 'react';

import classes from './ChooseThemes.module.css';
import Aux from '../../Auxiliary/Auxiliary';

const chooseThemes = (props) => {
  //   const openCity = (evt, cityName) => {
  //     // Declare all variables
  //     var i, tabcontent, tablinks;

  //     // Get all elements with class="tabcontent" and hide them
  //     tabcontent = document.getElementsByClassName('tabcontent');
  //     for (i = 0; i < tabcontent.length; i++) {
  //       tabcontent[i].style.display = 'none';
  //     }

  //     // Get all elements with class="tablinks" and remove the class "active"
  //     tablinks = document.getElementsByClassName('tablinks');
  //     for (i = 0; i < tablinks.length; i++) {
  //       tablinks[i].className = tablinks[i].className.replace(' active', '');
  //     }

  //     // Show the current tab, and add an "active" class to the button that opened the tab
  //     document.getElementById(cityName).style.display = 'block';
  //     evt.currentTarget.className += ' active';
  //   };
  return (
    <Aux>
      <section className={`container ${classes.themes__container}`}>
        {/* Tab links */}
        <div className={classes.tab}>
          <button
            type="button"
            className={`btn btn-outline-primary ${classes.btn__width}`}
            // onClick={(event) => openCity(event, 'London')}
          >
            capture
          </button>

          <button
            type="button"
            className={`btn btn-outline-secondary ${classes.btn__width}`}
            // onClick={(event) => openCity(event, 'Paris')}
          >
            front-end
          </button>

          <button
            type="button"
            className={`btn btn-outline-success ${classes.btn__width}`}
            // onClick={(event) => openCity(event, 'Paris')}
          >
            middle-end
          </button>

          <button
            type="button"
            className={`btn btn-outline-info ${classes.btn__width}`}
            // onClick={(event) => openCity(event, 'Paris')}
          >
            back-end
          </button>
        </div>

        {/* <!-- Tab content --> */}
        <div id="London" className={classes.tabcontent}>
          <div className={classes.hero__box}>
            <a href="#">
              <img alt="something here" className={classes.hero} />
            </a>
          </div>

          <div className={classes.hero__box}>
            <a href="#">
              <img alt="something here" className={classes.hero} />
            </a>
          </div>

          <div className={classes.hero__box}>
            <a href="#">
              <img alt="something here" className={classes.hero} />
            </a>
          </div>

          <div className={classes.hero__box}>
            <a href="#">
              <img alt="something here" className={classes.hero} />
            </a>
          </div>
        </div>

        <div id="Paris" class="tabcontent">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>
      </section>
    </Aux>
  );
};

export default chooseThemes;
