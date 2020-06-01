// import React from 'react'; not required as it by default added via nextjs
import React, { Component } from 'react';
import NewsList from '../components/newsList/newsList';
import { getNews } from '../services/algolia.service';
import { filteredNewWithTitle } from '../utils/utilities';

import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';

import './index.scss';



class indexPage extends Component {
  static async getInitialProps(context) {
    const page = context.query.page ? Number(context.query.page) : 0;
    if (context.query.search && context.query.search === 'latest') {
      const res = await getNews('search_by_date', {page:page, hitsPerPage:30});
      return { newsList: res.hits, pageNumber: res.page }
    }
    else {
      const res = await getNews('search', {page:page, hitsPerPage:30});
      return { newsList: res.hits, pageNumber: res.page }
    }
  }


  render() {
    const finalList = filteredNewWithTitle(this.props.newsList);
    return (
      <> 
        <Head>
          <title>React Assessment</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <main>
          <header className="header">
            <h1 className ="logo"><img src = "images/logo.gif" alt = "logo image"/></h1>
            <nav>
              <ul>
                <li>
                  <a onClick = {() => Router.push(`/`)}>Top</a>
                </li>
                <li>
                <a onClick = {() => Router.push(`/?search=latest`)}>New</a>
                </li>
              </ul>
            </nav>
          </header>
          <NewsList newsList = {finalList}/>
          <li className ="pagination"><Link href = {`/?page=${this.props.pageNumber + 1}`} key={`/?page=${this.props.pageNumber + 1}`}><a>More</a></Link></li>
        </main>
      </>
     );
  }
}
 
export default indexPage;
