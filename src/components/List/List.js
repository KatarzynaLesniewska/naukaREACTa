import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
    imageURL: <span>Img unavailable :( </span>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero 
        titleText={this.props.title} 
        imgUrlHreo={this.props.imageURL} 
        />
        <div className={styles.description}>
          {this.props.description}
        </div>
        <div className={styles.columns}>
          <Column title="Animals"></Column>
          <Column title="Plants"></Column>
          <Column title="Minerals"></Column>
        </div>
      </section>
    )
  }
}

export default List;
