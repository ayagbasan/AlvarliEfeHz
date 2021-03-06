module.exports = {
  CahceKeys: {
    LatestNews: "LatestNews",
    SMTP: "SMTP",
  },
  SqlQuery: {
    LatestNewsForCache: "select * from vw_news order by haberId desc limit 0,1000",
    LatestNews: "select * from vw_news order by haberId desc limit %s, %s",
    Katalogs: "Select * from vw_katalog order by tip,title",
    GetNewsByFilterId: "select * from vw_news_by_users_filter where FiltreId=%s Order By HaberId DESC limit %s,%s",
    GetLatestNewsOfUser: "select * from vw_news_user_latest where kullaniciId = '%s' order by HaberId desc limit %s, %s",
    DeleteNews: "delete from haber where HaberId=%s",
  },
  SockentEvents: {
    SayHelloToAllClients: "SayHelloToAllClients",
    SayHelloToServer: "SayHelloToServer",
    GetHelloFromServer: "GetHelloFromServer",
    GetHelloFromClient: "GetHelloFromClient",
    RefreshCacheRequest: "RefreshCacheRequest",
    RefreshCacheResponse: "RefreshCacheResponse",
    Global: {
      InitialData: "InitialData",
      CompanyList: "CompanyList",
      RefreshCache: "RefreshCache",
      RemoveLast5Item: "RemoveLast5Item",
      VersionControl: "VersionControl",
      Advertisement: "Advertisement",
    },
    User: {
      UpdateOneSignalId: "UpdateOneSignalId",
      AddNewUser: "AddNewUser",
      UpdateUser: "UpdateUser",
      UpdateUserStatus: "UpdateUserStatus",
      GetUserByDeviceId: "GetUserByDeviceId",
      GetUserById: "GetUserById",
      SendMail: "SendMail",
    },
    Filter: {
      AddNewFilter: "AddNewFilter",
      SaveFollowCompany: "SaveFollowCompany",
      GetFollowList: "GetFollowList",
      GetUserFilterList: "GetUserFilterList",
      DeleteFilter: "DeleteFilter",
      GetFilterKatalog: "GetFilterKatalog",
    },

    News: {
      GetLatestNews: "GetLatestNews",
      GetNewsByFilterId: "GetNewsByFilterId",
      GetLatestNewsOfUser: "GetLatestNewsOfUser",
      AddNews: "AddNews",
      DeleteNews: "DeleteNews",
      UpdateCache: "UpdateCache",
      NewItemsNotification: "NewItemsNotification",
      AttachmentList: "AttachmentList",
    },
  },
};
