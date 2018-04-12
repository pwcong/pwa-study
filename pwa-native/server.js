const fastify = require('fastify')();
const path = require('path');
const serveStatic = require('serve-static');

fastify.use('/', serveStatic(path.join(__dirname, 'view')));

fastify.get('/dalao', async (request, reply) => {
  return ['阮一峰', '尤雨溪', '玉伯', '老赵', '朴灵', '勾三股四', '张鑫旭', '大漠'];
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listending on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
