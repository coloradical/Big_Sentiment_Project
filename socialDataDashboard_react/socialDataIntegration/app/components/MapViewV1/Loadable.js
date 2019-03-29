/**
 *
 * Asynchronously loads the component for MapViewV1
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
