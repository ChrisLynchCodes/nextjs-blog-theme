// pages/index.js
import React from 'react';

import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import SEO from '../components/SEO';

const GetIp = ({ ipAddress }) => {
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
  // Get the visitor's IP address from the request object
  const ipAddress =
    context.req.headers['x-forwarded-for'] ||
    context.req.connection.remoteAddress;

  return { props: { ipAddress } };
}

export default GetIp;
