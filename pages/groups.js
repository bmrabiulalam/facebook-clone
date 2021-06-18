import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getSession } from 'next-auth/client';

const Groups = () => {
    return (
        <div className="h-screen bg-gray-100 overflow-hidden dark:bg-gray-800 dark:text-white">
          <Head>
            <title>Groups | Facebook</title>
          </Head>
          {/* Header */}
          <Header />
    
          <main className="flex">
            {/* Sidebar */}
            <Sidebar />
            {/* Feed - also consume the prefetched posts in Feed component alse*/}
            <h1 className="flex items-center">This is groups page</h1>
          </main>
        </div>
    );
};

export default Groups;

export async function getServerSideProps(context) {
  //Get the user props
  const session = await getSession(context);

  return {
    props: {
      // NOW passing this as prop to render it above as in Home Component
      session
    },
  };
}