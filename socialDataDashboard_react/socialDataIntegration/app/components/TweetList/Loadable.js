/**
 *
 * Asynchronously loads the component for TweetList
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
