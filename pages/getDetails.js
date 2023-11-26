// pages/index.js
import React from 'react';

import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import SEO from '../components/SEO';
import { logToFile } from '../utils/logger';

const getDetails = ({ ipAddress }) => {
  return (
    <div>
      
      <Layout>
      <Header name={"Chris"} />
      <main className="w-full">
      <p className="text-2xl dark:text-white text-center">
      Welcome to my website!
      </p>
      <p className="text-2xl dark:text-white text-center">{ipAddress}</p>

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
// Log information
// Log information to file
logToFile(`URL Path: ${urlPath}`);
logToFile(`HTTP Method: ${httpMethod}`);

// // Log query parameters
logToFile("Query Parameters:");
Object.entries(queryParameters).forEach(([key, value]) => {
  logToFile(`  ${key}: ${value}`);
});

// // Log response information
logToFile(`Status Code: ${statusCode}`);
logToFile("Response Headers:");
Object.entries(responseHeaders).forEach(([key, value]) => {
  logToFile(`  ${key}: ${value}`);
});

// // Log additional information
logToFile(`Cookies: ${JSON.stringify(cookies)}`);



  const ipAddress =
    context.req.headers['x-forwarded-for'] ||
    context.req.connection.remoteAddress;logToFile(`User-Agent: ${userAgent}`);
 logToFile(`IP: ${ipAddress}`);
  return { props: { ipAddress } };
  
}

export default getDetails;
