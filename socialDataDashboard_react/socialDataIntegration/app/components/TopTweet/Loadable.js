/**
 *
 * Asynchronously loads the component for TopTweet
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
