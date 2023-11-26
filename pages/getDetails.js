// pages/index.js
import React from 'react';

import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import SEO from '../components/SEO';

const getDetails = ({ ipAddress, urlPath, httpMethod, queryParameters, statusCode, responseHeaders, cookies, userAgent  }) => {
  return (
    <div>
      
      <Layout>
      <Header name={"Chris"} />
      <main className="w-full">
      <p className="text-2xl dark:text-black text-center">
      Welcome
      </p>
      <br/>
<p className="text-2xl dark:text-green text-center">IP Address: {ipAddress}</p>
<p className="text-2xl dark:text-white text-center">URL Path: {urlPath}</p>
<p className="text-2xl dark:text-white text-center">HTTP Method: {httpMethod}</p>
<p className="text-2xl dark:text-white text-center">Query Parameters: {JSON.stringify(queryParameters)}</p>
<p className="text-2xl dark:text-white text-center">Status Code: {statusCode}</p>
<p className="text-2xl dark:text-white text-center">Response Headers: {JSON.stringify(responseHeaders)}</p>
<p className="text-2xl dark:text-white text-center">Cookies: {JSON.stringify(cookies)}</p>
<p className="text-2xl dark:text-white text-center">User Agent: {userAgent}</p>

      </main>
      <Footer copyrightText={"TBC"} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  // Extract request information
  const urlPath = context.req.url;
  const httpMethod = context.req.method;
  const queryParameters = context.query;
  // Extract response information
  const statusCode = context.res.statusCode;
  const responseHeaders = context.res.getHeaders();
  // Extract additional information
  const cookies = context.req.cookies;
  const userAgent = context.req.headers['user-agent'];
  const ipAddress =
    context.req.headers['x-forwarded-for'] ||
    context.req.connection.remoteAddress;

  return { props: { ipAddress, urlPath, httpMethod, queryParameters, statusCode, responseHeaders, cookies, userAgent } };
  
}

export default getDetails;
