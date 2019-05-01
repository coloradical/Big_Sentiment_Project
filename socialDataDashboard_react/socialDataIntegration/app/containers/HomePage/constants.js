/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

const CHANGE_TOPIC = 'boilerplate/Home/CHANGE_TOPIC';
const SEARCH_TOPIC = 'boilerplate/Home/SEARCH_TOPIC';
const LOAD_REPOS_SUCCESS = 'boilerplate/Home/LOAD_REPOS_SUCCESS';
const LOAD_REPOS_ERROR = 'boilerplate/Home/LOAD_REPOS_ERROR';
const RESET_STATE = 'boilerplate/Home/RESET_STATE';
const SEARCH_TWITTER = 'boilerplate/Home/SEARCH_TWITTER';
const PUT_FUZZY_RESULTS = 'boilerplate/Home/PUT_FUZZY_RESULTS';
const SELECT_TOPIC = 'boilerplate/Home/SELECT_TOPIC';
const PUT_GLOBE_TAGS = 'boilerplate/Home/PUT_GLOBE_TAGS';
const GET_GLOBE_TAGS = 'boilerplate/Home/GET_GLOBE_TAGS';
export {CHANGE_TOPIC, SEARCH_TOPIC, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR, RESET_STATE,SEARCH_TWITTER, PUT_FUZZY_RESULTS, SELECT_TOPIC,PUT_GLOBE_TAGS, GET_GLOBE_TAGS}