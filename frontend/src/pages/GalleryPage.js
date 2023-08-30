import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'images/avocado-sales-dashboard.png',
      thumbnail: 'images/avocado-sales-dashboard.png',
      description: `A dashboard on avocado sales.`,
      originalHeight: '400px',
    },
    {
      original: 'images/finance-api-stock-analysis.png',
      thumbnail: 'images/finance-api-stock-analysis.png',
      description: `A strategy on finding the best value metrics for investing.`,
      originalHeight: '400px',
    },
    {
      original: 'images/fleet-weighted-scoring.png',
      thumbnail: 'images/fleet-weighted-scoring.png',
      description: `A weighted scoring method to determine the type of fleet.`,
      originalHeight: '400px',
    },
    {
      original: 'images/seattle-analysis.png',
      thumbnail: 'images/seattle-analysis.png',
      description: `An eligibility data analysis for Seattle.`,
      originalHeight: '400px',
    },
    {
      original: 'images/sql-sales-analysis.png',
      thumbnail: 'images/sql-sales-analysis.png',
      description: `A curated list of SQL queries.`,
      originalHeight: '400px',
    },
    {
      original: 'images/bangkok-thailand.png',
      thumbnail: 'images/bangkok-thailand.png',
      description: `A cultural temple called Wat Arun in Bangkok.`,
      originalHeight: '400px',
    },
    {
      original: 'images/copenhagen-denmark.png',
      thumbnail: 'images/copenhagen-denmark.png',
      description: `A cultural heritage street in Denmark.`,
      originalHeight: '400px',
    },
    {
      original: 'images/inari-shrine-kyoto-japan.png',
      thumbnail: 'images/inari-shrine-kyoto-japan.png',
      description: `A shrine and temple called Inari in Kyoto.`,
      originalHeight: '400px',
    },
    {
      original: 'images/paris-eiffel-tower-selfie.png',
      thumbnail: 'images/paris-eiffel-tower-selfie.png',
      description: `The famous Eiffel Tower landmark in Paris.`,
      originalHeight: '400px',
    },
    {
      original: 'images/stockholm-sweden.png',
      thumbnail: 'images/stockholm-sweden.png',
      description: `The city hall in Stockholm, Sweden.`,
      originalHeight: '400px',
    }
]
function GalleryPage() {
  return (
    <>
      <h2>Personal Projects and Travel Gallery</h2>
      <p> A curated list of projects and adventures. </p>

      <article class ="gallery">
      <ImageGallery items={images} />
      </article>
      </>
    );
}
export default GalleryPage;