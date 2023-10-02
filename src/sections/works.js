import React from 'react';
import $ from 'jquery';
import { slideRight, slideLeft } from '../Animations';
import Singlecard from './single_components/singlecard';

function Works() {
  $(window).on('scroll', () => {
    slideRight("#Tolq-card");
    slideLeft("#FL-card");
    slideRight("#CK-card");
    slideLeft("#LS-card");
  });

  return (
    <section className="works-section py-5 text-center" id="works">
      <h2 className="works-title mb-3 fs-1 p-5">Our works</h2>
      <div className="cards-container p-0 mx-auto d-flex justify-content-center row row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
        <Singlecard slide="slide-right" id="Tolq-card" titleColor="#A9BC87" clientName="Tolq" clientDescription="Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution." imgPath="./imgs/clays/clay_tolq.png" url="https://tolq.com/"/>
        <Singlecard slide="slide-left" id="FL-card" titleColor="#8BB5C9" clientName="Feedback Labs" clientDescription="Feedback Labs turns feedback into actionable insights for your team." imgPath="./imgs/clays/clay_feedbacklabs.png" url="https://feedbacklabs.org/"/>
        <Singlecard slide="slide-right" id="CK-card" titleColor="#00A0B6" clientName="Codekeeper" clientDescription="Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements." imgPath="./imgs/clays/clay_codekeeper.png" url="https://codekeeper.co/"/>
        <Singlecard slide="slide-left" id="LS-card" titleColor="#8B60D3" clientName="LegalSite" clientDescription="Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments." imgPath="./imgs/clays/clay_legalsite.png" url="https://legalsite.co/"/>
      </div>
    </section>
  );
}

export default Works;
