import React, { Component } from 'react'
import styles from './styles.module.scss'

export default class Page1 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className={styles.root}>
                page1
            </div>
        )
    }
}