const TEST_SERVER = 'http://staging.discernliving.com/discern/';
// const PROD_SERVER = 'http://service.discernliving.com/discern/';
// const VERSIONS = { V1: '/api/v1' };
const INSTA_SERVER = 'https://www.instagram.com/discernliving/';

const INSTA_APIs = {
  PROFILE: `${INSTA_SERVER}?__a=1`
};

const APIs = {
  LOGIN: `${TEST_SERVER}login_out/user/login`,
  SIGNUP: `${TEST_SERVER}login_out/user/register`,
  RESET: `${TEST_SERVER}login_out/user/request_new_password`,
  HOME: {
    LOOKS: `${TEST_SERVER}looks/looks-listing`,
    PICKS: `${TEST_SERVER}tags/dispicks`,
    CATEGORIES: `${TEST_SERVER}tags/top-categories`,
    MAJOR_STYLE: `${TEST_SERVER}product/majorstyle_list`,
    BOUTIQUES: `${TEST_SERVER}tags/boutiques`
  },
  PRODUCT: {

  },
  FETCHQUESTIONS:
    `${TEST_SERVER}gitdiscern-quiz/quiz/retrieve?nitems=1&since=0&type=`

};

export { APIs, INSTA_APIs };
