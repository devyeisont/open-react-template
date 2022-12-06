import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Mandos & Consolas',
    paragraph: 'Aquí toda una zona gamer con las ultimas consolas de XBOX, Nintendo, Play Station y múltiples accesorios gamer. ¡Compra seguro en Video Juegos/Yume!'
  };
  const sectionHeader2 = {
    title: 'Computadores & Celulares',
    paragraph: 'Computadores y celulares de la mejor calidad, para que tengas la mejor experiencia con tus Juegos Y Aplicaciones. ¡Compra seguro en Video Juegos/Yume!'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Mandos Originales
                </div>
                <h3 className="mt-0 mb-12">
                  Mandos Inalambricos
                </h3>
                <p className="m-0">
                  Haz que tu experiencia de juego sea más envolvente con los accesorios y los controles Xbox para las consolas Xbox Series X|S / xboxOne / Play 4 & 3.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/control-xboxOne.png')}
                  alt="Features split 01"
                  width={488}
                  height={376} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Última generación de consolas
                </div>
                <h3 className="mt-0 mb-12">
                  ¡Consolas!
                </h3>
                <p className="m-0">
                  las ultimas consolas de XBOX, Nintendo, Play Station ¡Todo en Video Juegos/Yume!</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/ps5.png')}
                  alt="Features split 02"
                  width={488}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader2} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Pc Gamer
                </div>
                <h3 className="mt-0 mb-12">
                  Computadores Gamers!
                </h3>
                <p className="m-0">
                  Con la mayor tecnologia y rendimiento para que disfrutes de tus juegos como todo un profesional.
                  Alto Rendimiento y fluidez.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/pcGamerAzul.png')}
                  alt="Features split 01"
                  width={488}
                  height={376} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  lo ultimo en celulares
                </div>
                <h3 className="mt-0 mb-12">
                  ¡!phone & android!
                </h3>
                <p className="m-0">
                Encuentra aquí lo último en Celulares y Smartphones iPhone, Huawei, Samsung, Motorola, Asus y muchas marcas más!</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/iphone.png')}
                  alt="Features split 02"
                  width={350}
                  height={150} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;