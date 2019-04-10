import React, { Component } from 'react';
const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;




class LinkValidator extends Component {
  state = {
    links: [],
    goodLinks: [],
    badLinks: []
  }


  validateLinks() {
    console.log('axios')

    axios
      .get(`${'https://cors-anywhere.herokuapp.com/'}https://web-crawler-test2.herokuapp.com`)
      .then(res => {
        return res.data;
      })
      .then(data => {
        // console.log(data)


        const dom = new JSDOM(data);
        const nodeList = dom.window.document.querySelectorAll('a');
        // const newLinks = nodeList.forEach(item => console.log(item.href));

        nodeList.forEach(link =>
          axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://web-crawler-test2.herokuapp.com${link.href}`).then(res => {
            this.setState({ goodLinks: [...this.state.goodLinks, link.href] })
          }).catch(() => this.setState({ badLinks: [...this.state.badLinks, link.href] }))

        )

      }
      )
  }

  componentDidMount() {
    console.log('component mounted')
    this.validateLinks()
  }



  render() {
    console.log('good', this.state.goodLinks, 'bad', this.state.badLinks);
    return (<div></div>)
  }
}





export default LinkValidator;
