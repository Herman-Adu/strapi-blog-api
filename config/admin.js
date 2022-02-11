module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '513d3e6a9cd7567aac6c3f1fc963eedb'),
  },
});
