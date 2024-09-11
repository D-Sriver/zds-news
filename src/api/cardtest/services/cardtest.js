'use strict';

/**
 * cardtest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cardtest.cardtest');
