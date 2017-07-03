import $ from 'webpack-zepto'

export default class InkBlotsAPI {
  getRandomBlot(cb) {
    $.get('/inkblots', cb);
  }
};

