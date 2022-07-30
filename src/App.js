import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row mt-3'>
        <MainVideo />
        <SuggestionVideos />
      </div>
      <div className='row'>
        <Comments />
      </div>
    </div>
  );
}
const MainVideo = () => {
  const title = "Requisite React: Learn how to use React Hooks, Suspense & JSX - ent  C. Dodds"
  return (
    <div className='col-md-7'>
      <div className='row'>
        <iframe
          title='react-summet'
          width='756'
          height='425'
          src='https://www.youtube.com/embed/tO8qHlr6Wqg?list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div className='row'>
        <h2>
          {/*put the title of the video*/}
        </h2>
      </div>
    </div>
  );
};
const SuggestionVideos = () => {
  const urlList = [
    {
      src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `CSS-in-JS — Max Stoiber`,
    },
    {
      src: `https://www.youtube.com/embed/v1JAUiqskiw?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Modern Forms in React — Erik Rasmussen`,
    },
    {
      src: `https://www.youtube.com/embed/N0wHweOu-LQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Engineering led design — Lauren Argenta`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
  ];
  return (
    <div className='col-md-5'>
      {
        /* display the listeof video suggestion: indication loop througth the list
        replace *** with the correct value
        
        <div className='row mt-1 ' key = ***>
          <div className='col-md-8'>
            <iframe
              title='react-summet'
              // width='120'
              src= ***
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
          <div className='col-md-4 '>
            <h6>*** (*** means  video title)</h6>
          </div>
        </div>
      
        */}
    </div>
  );
};

const Comments = () => {
 /*import commentsList*/

 /* and display the comments*/

  return (
    <div className='col-md-8'>
      {/*
        <div className='row' key={key}>
          <h6> *** here is comment name </h6>
          <span>***  here is comment body </span>
        </div>
      */}
    </div>
  );
};


export default App;
