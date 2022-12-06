import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-10">
        <Link to="/">
          <Image
            src="/favicon.png"
            alt="Open"
            width={52}
            height={52} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;