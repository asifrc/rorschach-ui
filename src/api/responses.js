import $ from 'webpack-zepto'

export default class ResponseAPI {
  getAllResponses(cb) {
    $.get('/responses', cb);
  }
};

