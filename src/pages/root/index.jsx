import React, { Component } from 'react'
import styles from './styles.module.scss'
import fullpage from 'fullpage.js'
export default class Components extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        new fullpage('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true
        });
    }
    render() {
        return (
            <div className={styles.root}>
                <div id="fullpage">
                    <div class="section">Page1</div>
                    <div class="section">Page2</div>
                    <div class="section">Page3</div>
                    <div class="section">Page4</div>
                </div>
            </div>
        )
    }
}