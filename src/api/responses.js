import $ from 'webpack-zepto'

export default class ResponseAPI {
  getAllReponses(cb) {
    $.get('/responses', cb);
  }
};

