import { useState, forwardRef } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback: customerFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handelError = () => {
        setFallback(customerFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handelError}
        />
    );
});

export default Image;
