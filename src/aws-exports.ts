// replace the user pool region, id, and app client id details
// export default {
//   "REGION": "ap-southeast-1",
//   "USER_POOL_ID": "ap-southeast-1_iyqx3eI2X",
//   "USER_POOL_APP_CLIENT_ID": "6gmqksqcvjjeadr3orl0cvl0hd"
// }

// Get parameters from Parameter Store

export const awsconfig = {
  // refer to infra/backend/staticResources/auth.py for env variables

  aws_project_region: "ap-southeast-1",
  // aws_cognito_identity_pool_id: "ap-southeast-1:1659730c-a259-404f-bc9d-3a09ea0bf898",
  aws_cognito_region: "ap-southeast-1",
  aws_user_pools_id: "ap-southeast-1_iyqx3eI2X",
  aws_user_pools_web_client_id: "3840fc77g3b35ff31bfronkp37",
  oauth: {},
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    // identityPoolId: "ap-southeast-1:1659730c-a259-404f-bc9d-3a09ea0bf898",
    // REQUIRED - Amazon Cognito Region
    region: "ap-southeast-1",
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "ap-southeast-1_iyqx3eI2X",
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    // userPoolWebClientId: "6gmqksqcvjjeadr3orl0cvl0hd",
  },
};
