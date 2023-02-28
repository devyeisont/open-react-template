import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import FeatureTileIcon01 from '../../assets/images/feature-tile-icon-01.svg';
import FeatureTileIcon02 from '../../assets/images/feature-tile-icon-02.svg';
import FeatureTileIcon03 from '../../assets/images/feature-tile-icon-03.svg';
import FeatureTileIcon04 from '../../assets/images/feature-tile-icon-04.svg';
import FeatureTileIcon05 from '../../assets/images/feature-tile-icon-05.svg';
import FeatureTileIcon06 from '../../assets/images/feature-tile-icon-06.svg';
import ModalFeature from '../elements/ModalFeature';
import modalList from '../../utils/modalList.json';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Todas las plataformas',
    paragraph: 'Tecnología de vanguardía -- PC, PS5, Xbox series S/X, PS4, Xbox One, iOS, Android.'
  };

  const openModal = (e) => {
    e.preventDefault();
    setModalActive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setModalActive(false);
  }

  const handleModalChanged = (index) => {
    setCurrentModal(index);
  }


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      onClick={(e) => {
                        openModal(e);
                        handleModalChanged(0);
                      }}
                      src={FeatureTileIcon01}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Xbox Series S/X
                  </h4>
                  <p className="m-0 text-sm">
                    Retrocompatibilidad con Xbox One y exclusivos para Xbox Series S/X.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      onClick={(e) => {
                        openModal(e);
                        handleModalChanged(1);
                      }}
                      src={FeatureTileIcon02}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    PS5
                  </h4>
                  <p className="m-0 text-sm">
                    Retrocompatibilidad con PS4 y exclusivos para PS5.
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      onClick={(e) => {
                        openModal(e);
                        handleModalChanged(2);
                      }}
                      src={FeatureTileIcon03}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    PS4
                  </h4>
                  <p className="m-0 text-sm">
                    Retrocompatibilidad y multiplataforma y exclusivos para PS4.
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      onClick={(e) => {
                        openModal(e);
                        handleModalChanged(3);
                      }}
                      src={FeatureTileIcon04}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    PC
                  </h4>
                  <p className="m-0 text-sm">
                    Multiplataforma y exclusivos para PC.
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      onClick={(e) => {
                        openModal(e);
                        handleModalChanged(4);
                      }}
                      src={FeatureTileIcon05}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    iOS
                  </h4>
                  <p className="m-0 text-sm">
                    Todos los modelos de iPhone a precio de importación
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      onClick={(e) => {
                        openModal(e);
                        handleModalChanged(5);
                      }}
                      src={FeatureTileIcon06}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Android
                  </h4>
                  <p className="m-0 text-sm">
                    Celulares de todas del mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalFeature
          modalActive={modalActive}
          closeModal={closeModal}
          modalDescription={modalList[currentModal].modalDescription}
          modalImage={modalList[currentModal].modalImage}
          modalTitle={modalList[currentModal].modalTitle} />
      </div>
    </section >
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;