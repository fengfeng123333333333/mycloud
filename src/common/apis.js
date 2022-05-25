import baseApis from './baseUrl'

export default {
  loginApi: baseApis.baseUrlBizAdmin + "/account/login",
  userListApi: baseApis.baseUrlBizAdmin + "/user/list",
  userUpdateApi: baseApis.baseUrlBizAdmin + "/user/update",
  userPasswordApi: baseApis.baseUrlBizAdmin + "/user/password-reset",
  userSaveApi: baseApis.baseUrlBizAdmin + "/user/save",
  minerListApi: baseApis.baseUrlBizAdmin + "/miner/minerList",
  minerAddApi: baseApis.baseUrlBizAdmin + "/miner/add",
  minerDeleteApi: baseApis.baseUrlBizAdmin + "/miner/delete",
  minerEditorApi: baseApis.baseUrlBizAdmin + "/miner/update",
};
