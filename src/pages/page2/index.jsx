import React, { Component } from 'react'
import styles from './styles.module.scss'

export default class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className={styles.root}>
                page2
            </div>
        )
    }
}