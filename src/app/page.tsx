import React from "react";
import {Header} from "@/components/Layout/Header/Header";
import {Footer} from "@/components/Layout/Footer/Footer";
import {LeftMenu} from "@/components/LeftMenu/LeftMenu";
import {NewsFeed} from "@/components/NewsFeed/NewsFeed";
import {Read} from "@/components/Read/Read";
import {Incidents} from "@/components/Incidents/Incidents";


export default function Home() {
  return (
      <>
        <Header />
        <main className='flex grow px-[36px] max-w-[1440px]'>
            <LeftMenu />
            <div className='w-full'>
                <NewsFeed />
                <Read />
                <Incidents />
            </div>
        </main>
       <Footer />
      </>
  )
}
