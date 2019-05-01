/**
 *
 * Asynchronously loads the component for GoogleMaps
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
