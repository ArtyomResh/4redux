import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './Main.styl'

const cx = classNames.bind(styles)

export default class Main extends Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
    return (
      <div
        className={cx('main')}
      >
        Redux/react boilerplate!
        Resh was here.
      </div>
    )
  }
}
