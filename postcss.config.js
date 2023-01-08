import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import purgecss from '@fullhuman/postcss-purgecss';

export default {
    plugins: [
        autoprefixer,
        postcssNested,
        purgecss({
            content: ['./**/*.html']
        })
    ]
};
