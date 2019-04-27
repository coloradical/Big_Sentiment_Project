/**
 *
 * Asynchronously loads the component for PhotoGrid
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
