/**
 *
 * Asynchronously loads the component for PersonCard
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
